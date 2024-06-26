import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from '../screens/Login';

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return <Stack.Navigator>
    <Stack.Screen name='Login' component={LoginScreen} />
  </Stack.Navigator>
}