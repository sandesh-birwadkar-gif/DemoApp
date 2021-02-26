import {makeAutoObservable} from 'mobx';
import {isStringOnly} from '../utils/Validation';

class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }

  userName = '';

  password = '';

  userNameError = '';

  passwordError = '';

  resetFields = () => {
    this.userName = '';

    this.password = '';

    this.userNameError = '';

    this.passwordError = '';
  };

  loginValidation = () => {
    var isValid = true;
    if (this.userName === '') {
      isValid = false;
      this.setFields('userNameError', 'Please enter username.');
    } else if (!isStringOnly(this.userName)) {
      isValid = false;
      this.setFields('userNameError', 'username must be string');
    } else {
      this.setFields('userNameError', '');
    }
    if (this.password === '') {
      isValid = false;
      this.setFields('passwordError', 'Please enter password.');
    } else {
      this.setFields('passwordError', '');
      isValid = true;
    }

    if (this.password === '') {
      isValid = false;
      this.setFields('passwordError', 'Please enter password.');
    } else {
      this.setFields('passwordError', '');
      isValid = true;
    }
    return isValid;
  };

  onBlurLoginFields = eName => {
    if (eName === 'userName') {
      if (this.userName === '') {
        this.setFields('userNameError', 'Please enter username.');
      } else if (!isStringOnly(this.userName)) {
        this.setFields('userNameError', 'username must be string');
      } else {
        this.setFields('userNameError', '');
      }
    }

    if (eName === 'password') {
      if (this.password === '') {
        this.setFields('passwordError', 'Please enter password.');
      } else {
        this.setFields('passwordError', '');
      }
    }
  };

  loginApi = () => {
    this.isValid = this.loginValidation();
  };

  setFields(eName, data) {
    this[eName] = data;
    console.log(eName, data);
  }
}
export default new LoginStore();
