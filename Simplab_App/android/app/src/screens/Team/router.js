import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chats from './chats';
import Experiments from './experiments';
import Files from './files';

export default function Router() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{headerShown: false}}
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
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
        }}
      />
      <Tab.Screen
        name="Experiments"
        component={Experiments}
        options={{
          tabBarLabel: 'Experiments',
        }}
      />
      <Tab.Screen
        name="Files"
        component={Files}
        options={{
          tabBarLabel: 'Files',
        }}
      />
    </Tab.Navigator>
  );
}
