import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import {Observer} from 'mobx-react';
import AppStore from '../../store/AppStore';
import CardComponent from './CardComponent';
import IconPack from '../../utils/IconPack';
import LoginStore from '../../store/LoginStore';

const Dashboard = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Dashboard',
      headerTitleStyle: styles.headerTitleStyle,
      headerTitleAlign: 'center',
      headerStyle: {
        shadowColor: 'transparent',
        elevation: 0,
        backgroundColor: '#ebd7c0',
      },
      headerLeft: () => null,
    });
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Observer>
        {() => (
          <CardComponent
            title={item.title}
            subTitle={item.subTitle}
            imageIcon={item.image}
          />
        )}
      </Observer>
    );
  };

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.profileView}>
              <Text style={styles.profileText}>
                Hello {LoginStore.userName}
              </Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('Login');
                  LoginStore.resetFields();
                }}>
                <Image
                  source={IconPack.LOGOUT_ICON}
                  style={styles.logOutIcon}
                />
              </Pressable>
            </View>
          </View>
          <FlatList
            data={AppStore.DATA}
            renderItem={renderItem}
            keyExtractor={item => `card-${item.id}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
          />
        </View>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerTitleStyle: {
    lineHeight: 21,
    color: '#000',
    fontSize: 18,
    letterSpacing: 1.6,
    fontFamily: 'Lato-Bold',
    fontWeight: '600',
  },
  headerContainer: {
    backgroundColor: '#ebd7c0',
    height: '25%',
    borderBottomLeftRadius: AppStore.hRem * 25,
    borderBottomRightRadius: AppStore.hRem * 25,
    width: '100%',
    marginBottom: AppStore.hRem * 16,
  },
  logOutIcon: {
    height: Math.round(25 * AppStore.hRem),
    aspectRatio: 1,
  },
  profileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: AppStore.wRem * 20,
    alignItems: 'center',
    marginTop: AppStore.hRem * 20,
  },
  profileText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.8,
  },
});
export default Dashboard;
