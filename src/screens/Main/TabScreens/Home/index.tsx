import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-native-material/core';
import React from 'react';
import Colors from '@/constants/colors';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <View>
        <Button onPress={() => { console.log('a') }} title='하이 1' />
        <Button onPress={() => { console.log('a') }} title='하이 2' />
        <Button onPress={() => { console.log('a') }} title='하이 3' />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
