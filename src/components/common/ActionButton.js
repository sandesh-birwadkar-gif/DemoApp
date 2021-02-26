import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const hRem = height / 812;
const wRem = width / 375;

const ActionButton = ({title, onButonPress, containerStyle, btnBGStyle}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onButonPress();
      }}
      activeOpacity={0.7}>
      <View style={[styles.mainContainerStyle, containerStyle || null]}>
        <View style={[styles.innerContainer, btnBGStyle || null]}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainerStyle: {
    height: hRem * 44,
    width: width - 50,
  },
  innerContainer: {
    flex: 1,
    color: '#FFFFFF',
    borderRadius: wRem * 22,
    backgroundColor: '#a3c08f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 1.6,
    fontFamily: 'Lato-Bold',
  },
});
export default ActionButton;
