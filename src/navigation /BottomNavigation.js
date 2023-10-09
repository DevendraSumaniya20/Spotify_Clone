import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationString from '../constants/NavigationString';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen
        name={NavigationString.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <Ionicons name="home" size={rh(2.5)} color={'white'} />
              ) : (
                <Ionicons name="home-outline" size={rh(2.5)} color={'white'} />
              )}
            </View>
          ),
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name={NavigationString.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {focused ? (
                <FontAwesome6
                  name="circle-user"
                  size={rh(2.5)}
                  color={'white'}
                />
              ) : (
                <Feather name="user" size={rh(2.5)} color={'white'} />
              )}
            </View>
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
