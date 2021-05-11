import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
//import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile/Profile';
import Teams from '../Teams/Teams';
import alerts from '../alerts/alerts';
import Experiments from '../Experiments/Experiments';
import Settings from '../Settings/Settings';

export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Teams"
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
        activeTintColor: '#F37A27',
        inactiveTintColor: '#FFFFFF',
      }}>
      <Tab.Screen
        name="Teams"
        component={Teams}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('./images/focus-team.png')
                  : require('./images/white-team.png')
              }
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Alerts"
        component={alerts}
        options={{
          tabBarLabel: 'Alerts',
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('./images/focus-alert.png')
                  : require('./images/white-alert.png')
              }
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Experiments"
        component={Experiments}
        options={{
          tabBarLabel: 'Experiments',
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('./images/focus-exp.png')
                  : require('./images/white-exp.png')
              }
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused, color}) => (
            <Image
              source={
                focused
                  ? require('./images/focus-settings.png')
                  : require('./images/white-settings.png')
              }
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
