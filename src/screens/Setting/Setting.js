import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Setting = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Setting',
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerLeft: () => null,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleStyle: {
    lineHeight: 21,
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 1.6,
  },
});

export default Setting;
