import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Registration from './screens/Login/Registration';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';
import Setting from './screens/Setting/Setting';
import Profile from './screens/Profile/Profile';
import IconPack from './utils/IconPack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from './RootNavigation';

const {width, height} = Dimensions.get('window');
const hRem = height / 812;
const wRem = width / 375;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = createStackNavigator();

function DashboardScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
}
const ProfileStack = createStackNavigator();

function ProfileScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={Setting} />
    </SettingStack.Navigator>
  );
}

const TabBarBottom = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: '#202020',
        inactiveTintColor: '#9B9B9B',
        showLabel: false,
        style: {
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.09,
          shadowRadius: 5,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <Image
              source={IconPack.DASHBOARD_ICON}
              style={[
                {height: Math.round(20.8 * hRem), aspectRatio: 1},
                {tintColor: color},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={IconPack.SETTING_ICON}
              style={[
                {height: Math.round(21 * hRem), aspectRatio: 1},
                {tintColor: color},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <Image
              source={IconPack.PROFILE_ICON}
              style={[
                {height: Math.round(21 * hRem), aspectRatio: 1},
                {tintColor: color},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerTab = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={TabBarBottom} />
    </Drawer.Navigator>
  );
};

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen
        name="DrawerTab"
        component={DrawerTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainApp />
    </NavigationContainer>
  );
};

export default Routes;
