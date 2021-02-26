import React, {useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TextInputField from '../../components/common/TextInputField';
import ActionButton from '../../components/common/ActionButton';
import {Observer} from 'mobx-react';
import LoginStore from '../../store/LoginStore';
import LocalDbStore from '../../store/LocalDbStore';
import AppStore from '../../store/AppStore';
const {width} = Dimensions.get('window');

const Login = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Login',
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
      },
      headerLeft: () => null,
    });
    LoginStore.resetFields();
  });
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <Observer>
      {() => (
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={AppStore.isiOS ? 20 : 0}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.textInputContainer}>
                <TextInputField
                  placeholder="User Name"
                  onChangeText={text => LoginStore.setFields('userName', text)}
                  autoCapitalize="none"
                  error={LoginStore.userNameError}
                  value={LoginStore.userName}
                  returnKeyType="next"
                  textInputRef={userNameRef}
                  onSubmitEditing={() => passwordRef.current.focus()}
                  title="Enter Username"
                  onBlur={() => LoginStore.onBlurLoginFields('userName')}
                />
                <TextInputField
                  placeholder="Enter Password"
                  onChangeText={text => LoginStore.setFields('password', text)}
                  autoCapitalize="none"
                  error={LoginStore.passwordError}
                  value={LoginStore.password}
                  returnKeyType="done"
                  textInputRef={passwordRef}
                  onSubmitEditing={() => {}}
                  title="Password"
                  isSecure={true}
                  onBlur={() => LoginStore.onBlurLoginFields('password')}
                />
                <View style={styles.btnContainer}>
                  <ActionButton
                    title="LOGIN"
                    onButonPress={() => {
                      LoginStore.loginApi();
                      if (LoginStore.isValid) {
                        LocalDbStore.SelectQuery(
                          LoginStore.userName,
                          LoginStore.password,
                        );
                      }
                    }}
                    containerStyle={styles.buttonStyle}
                  />
                  <ActionButton
                    title="REGISTER"
                    onButonPress={() => {
                      props.navigation.navigate('Registration');
                    }}
                    btnBGStyle={{backgroundColor: '#31496e'}}
                    containerStyle={styles.buttonStyle}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  buttonStyle: {
    width: width - 54,
    marginTop: AppStore.hRem * 25,
  },
  textInputContainer: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: AppStore.hRem * 40,
  },
  headerTitleStyle: {
    lineHeight: 21,
    color: '#000',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    letterSpacing: 1.6,
    fontWeight: '600',
  },
});

export default Login;
