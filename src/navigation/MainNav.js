import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Neww from '../screens/Neww';
import Second from '../screens/Second';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import flatScreen from '../screens/flatScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='second' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Neww}  />
      <Stack.Screen name="second" component={Second}   />

      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Signup" component={Signup}   />
      <Stack.Screen name="flatScreen" component={flatScreen}/>
      
    </Stack.Navigator>
  );
}
export default MyStack