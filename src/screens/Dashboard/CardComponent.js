import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppStore from '../../store/AppStore';

const CardComponent = ({title, subTitle, imageIcon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={imageIcon} style={styles.imageStyles} />
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: AppStore.wWidth - 32,
    borderRadius: AppStore.wRem * 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: AppStore.hRem * 16,
    marginTop: AppStore.hRem * 2.5,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    marginVertical: 10,
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.8,
    marginVertical: 6,
  },
  subtitleText: {
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.8,
    marginVertical: 6,
  },
  imageStyles: {
    width: AppStore.wRem * 45,
    height: AppStore.hRem * 48,
    marginRight: 20,
  },
});

export default CardComponent;
