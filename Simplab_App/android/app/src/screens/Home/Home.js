import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
//import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
//import Icon from 'react-native-vector-icons/Ionicons';  
import Profile from "../Profile/Profile";
import Teams from "../Teams/Teams";
import alerts from "../alerts/alerts";
import Experiments from "../Experiments/Experiments";
import Settings from "../Settings/Settings";

export default function Home() {
    const Tab = createBottomTabNavigator();

  //function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Teams"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Teams"
          component={Teams}
          options={{
            tabBarLabel: 'Home',
            /*tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),*/
          }}
        />
        <Tab.Screen
          name="Alerts"
          component={alerts}
          options={{
            tabBarLabel: 'Alerts',
            /*tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),*/
          }}
        />
        <Tab.Screen
          name="Experiments"
          component={Experiments}
          options={{
            tabBarLabel: 'Experiments',
            /*tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),*/
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            /*tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),*/
          }}
        />
      </Tab.Navigator>
    );
  //}
}
