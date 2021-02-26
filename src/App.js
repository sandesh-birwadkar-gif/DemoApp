import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Routes from './Routes';
import {Observer} from 'mobx-react';
import LocalDbStore from './store/LocalDbStore';

const App = () => {
  useEffect(() => {
    LocalDbStore.openDatabase();
  }, []);
  return <Observer>{() => <Routes />}</Observer>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
