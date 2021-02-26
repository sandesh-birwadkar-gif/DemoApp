import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import TextInputField from '../../components/common/TextInputField';
import ActionButton from '../../components/common/ActionButton';
import HeaderBackButton from '../../components/common/HeaderBackButton';
import RegistrationStore from '../../store/RegistrationStore';
import {Observer} from 'mobx-react';
import LoginStore from '../../store/LoginStore';
import LocalDbStore from '../../store/LocalDbStore';
import AppStore from '../../store/AppStore';
const {width} = Dimensions.get('window');
const Registration = props => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const mobileNumberRef = useRef(null);

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Registration',
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
      },
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => {
            LoginStore.resetFields();
            props.navigation.goBack();
          }}
        />
      ),
    });
    RegistrationStore.resetFields();
  }, []);
  return (
    <Observer>
      {() => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          style={styles.container}
          keyboardVerticalOffset={AppStore.isiOS ? 70 : -400}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
              <View style={styles.textInputContainer}>
                <TextInputField
                  placeholder="User Name"
                  onChangeText={text =>
                    RegistrationStore.setFields('userName', text)
                  }
                  autoCapitalize="none"
                  error={RegistrationStore.userNameError}
                  value={RegistrationStore.userName}
                  returnKeyType="next"
                  textInputRef={userNameRef}
                  onSubmitEditing={() => passwordRef.current.focus()}
                  title="Username"
                  onBlur={() =>
                    RegistrationStore.onBlurRegistrationFields('userName')
                  }
                />
                <TextInputField
                  placeholder="User Password"
                  onChangeText={text =>
                    RegistrationStore.setFields('password', text)
                  }
                  autoCapitalize="none"
                  error={RegistrationStore.passwordError}
                  value={RegistrationStore.password}
                  returnKeyType="next"
                  textInputRef={passwordRef}
                  onSubmitEditing={() => mobileNumberRef.current.focus()}
                  title="Password"
                  onBlur={() =>
                    RegistrationStore.onBlurRegistrationFields('password')
                  }
                />
                <TextInputField
                  placeholder="Enter Mobile Number"
                  onChangeText={text =>
                    RegistrationStore.setFields('mobileNumber', text)
                  }
                  autoCapitalize="none"
                  error={RegistrationStore.mobileNumberError}
                  value={RegistrationStore.mobileNumber}
                  returnKeyType="done"
                  textInputRef={mobileNumberRef}
                  onSubmitEditing={() => {}}
                  title="Mobile Number"
                  onBlur={() =>
                    RegistrationStore.onBlurRegistrationFields('mobileNumber')
                  }
                />
                <View
                  style={{alignItems: 'center', marginTop: AppStore.hRem * 40}}>
                  <ActionButton
                    title="SUBMIT"
                    onButonPress={() => {
                      RegistrationStore.registrationApi();
                      if (RegistrationStore.isValid) {
                        LocalDbStore.insertTblUserDetail(
                          RegistrationStore.userName,
                          RegistrationStore.password,
                        );
                      }
                    }}
                    containerStyle={styles.buttonStyle}
                  />
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainerStyle: {
    marginTop: AppStore.hRem * 10,
  },
  buttonStyle: {
    width: width - 54,
    marginTop: AppStore.hRem * 25,
  },
  headerTitleStyle: {
    lineHeight: 21,
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
  },
  textInputContainer: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});

export default Registration;
