import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const hRem = height / 812;
const wRem = width / 375;

const TextInputField = props => {
  const {
    title,
    showIcon,
    placeholder,
    textAreaStyle,
    error,
    icon,
    iconStyle,
    isSecure,
    textInputRef,
    onBlur,
    ...otherProps
  } = props;

  var isPasswordField = false;
  if (isSecure) {
    isPasswordField = true;
  }

  const [secureInput, setSecureInput] = useState(isSecure);
  const [isFocused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View
        style={[
          styles.action,
          error != null && error.length > 0
            ? {borderBottomColor: '#EE4423'}
            : '',
        ]}>
        <TextInput
          ref={textInputRef}
          placeholder={placeholder}
          style={styles.textInput}
          autoCorrect={false}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            onBlur();
            setFocused(false);
          }}
          secureTextEntry={isPasswordField && secureInput}
          {...otherProps}
          autoCompleteType="off"
          placeholderTextColor="#9B9B9B"
        />
      </View>
      {error != null && error.length > 0 && (
        <Text style={[styles.errorStyle, textAreaStyle || null]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: wRem * 16,
    marginBottom: hRem * 16,
  },
  text: {
    color: '#3F3B3B',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: hRem * 10,
    fontFamily: 'Lato-Bold',
    letterSpacing: 1.2,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    color: '#161616',
    fontSize: 16,
    marginBottom: hRem * 9,
    flex: 1,
    fontFamily: 'Lato-Regular',
  },
  errorStyle: {
    width: width - 100,
    color: '#EE4423',
    fontSize: 12,
    marginTop: hRem * 5,
    fontFamily: 'Lato-Regular',
  },
});

export default TextInputField;
