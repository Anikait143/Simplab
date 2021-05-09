import React from 'react';
//import { Ionicons } from "@expo/vector-icons";
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import alerts from '../alerts/alerts';
import Experiments from '../Experiments/Experiments';
import {NavigationContainer} from '@react-navigation/native';
import Settings from '../Settings/Settings';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  // console.log(props);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        /*screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "alerts") {
              iconName = focused ? "md-hand" : "md-hand";
            } else if (route.name === "Experiments") {
              iconName = focused ? "md-contact" : "md-contact";
            } else if (route.name === "Home") {
              iconName = focused ? "md-pulse" : "md-pulse";
            } else if (route.name === "Settings") {
              iconName = focused ? "md-compass" : "md-compass";
            }

            return <Ionicons name={iconName} size={size} color={color} />;  
          },
        })}*/
        tabBarOptions={{
          activeTintColor: '#ff005a',
          inactiveTintColor: '#B8B8B8',
          inactiveBackgroundColor: 'white',
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 1000,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="alerts" component={alerts} />
        <Tab.Screen name="Experiments" component={Experiments} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default Navigator;
