import {makeAutoObservable} from 'mobx';
import SQLite from 'react-native-sqlite-storage';
import AppStore from './AppStore';
import LoginStore from './LoginStore';

class LocalDbStore {
  constructor() {
    makeAutoObservable(this);
  }
  db = null;

  UserLoggedIn = false;

  setFields(eName, data) {
    this[eName] = data;
    console.log(eName, data);
  }

  openDatabase() {
    if (this.db === null) {
      const dbUrl = {
        name: 'demo.db',
        location: 'Library',
      };
      this.db = SQLite.openDatabase(
        dbUrl,
        e => {
          console.log(e);
          this.createTable();
        },
        e => {
          console.log(e);
        },
      );
    }
  }

  createTable() {
    this.db.transaction(
      tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tbl_userDetail(user_name VARCHAR(100),user_password VARCHAR(100) )',
        );
      },
      error => {
        console.log(error);
      },
    );
  }

  insertTblUserDetail = (user_name, user_password) => {
    console.log('inside username', user_name);
    console.log('inside password', user_password);
    this.db.transaction(
      tx => {
        tx.executeSql(
          'INSERT INTO tbl_userDetail (user_name,user_password) VALUES (?, ? )',
          [user_name, user_password],
          (tx, results) => {
            console.log('Insert Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              alert(
                'Registration successful',
                'User updated successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => null,
                  },
                ],
                {cancelable: false},
              );
            } else {
              alert('Updation Failed');
            }
          },
        );
      },
      error => {
        console.log(error);
      },
    );
  };

  ExecuteQuery = (sql, params = []) =>
    new Promise((resolve, reject) => {
      this.db.transaction(trans => {
        trans.executeSql(
          sql,
          params,
          (trans, results) => {
            resolve(results);
          },
          error => {
            reject(error);
          },
        );
      });
    });

  async SelectQuery(user_name, user_password) {
    let selectQuery = await this.ExecuteQuery(
      `SELECT * FROM tbl_userDetail where user_name= ? AND user_password= ?`,
      [user_name, user_password],
      [],
    );

    if (selectQuery.rows.length && LoginStore.userName != '') {
      AppStore.postNavigate('DrawerTab');
    } else if (LoginStore.userName != '') {
      alert('Invalid credentials');
    }
  }
}

export default new LocalDbStore();
