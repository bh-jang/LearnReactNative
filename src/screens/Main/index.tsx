import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './TabScreens/Home';

interface MainTabParamList {
  HomeScreen: undefined;
  FirstScreen: undefined;
  SecondScreen: undefined;
  ThirdScreen: undefined;
}
const Tab = createBottomTabNavigator<MainTabParamList>();

const Main = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={Home} />
      <Tab.Screen name='FirstScreen' component={Home} />
      <Tab.Screen name='SecondScreen' component={Home} />
      <Tab.Screen name='ThirdScreen' component={Home} />
    </Tab.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})