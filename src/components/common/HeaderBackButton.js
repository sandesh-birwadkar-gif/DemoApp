import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import IconPack from '../../utils/IconPack';

const {width, height} = Dimensions.get('window');
const hRem = height / 812;
const wRem = width / 375;

const HeaderBackButton = ({onPress}) => (
  <TouchableOpacity onPress={() => onPress()}>
    <Image source={IconPack.BACK_ICON} style={styles.imageStyle} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  imageStyle: {
    width: hRem * 20,
    height: hRem * 15.08,
    marginLeft: wRem * 16,
  },
});

export default HeaderBackButton;
