import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabHeaderProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './TabScreens/Home';
import WebViewScreen from './WebViewScreen';
import { Button } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';

interface MainTabParamList {
  HomeScreen: undefined;
  WebViewScreen: undefined;
  SecondScreen: undefined;
  ThirdScreen: undefined;
}
const Tab = createBottomTabNavigator<MainTabParamList>();

const Main = () => {

  const navigation = useNavigation();

  const tabScreenOptions: BottomTabNavigationOptions = {
    headerLeft: () => (<Button variant='outlined' title='뒤로가기' onPress={() => navigation.goBack()} />)
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' options={tabScreenOptions} component={Home} />
      <Tab.Screen name='WebViewScreen' options={tabScreenOptions} component={WebViewScreen} />
      <Tab.Screen name='SecondScreen' options={tabScreenOptions} component={Home} />
      <Tab.Screen name='ThirdScreen' options={tabScreenOptions} component={Home} />
    </Tab.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})