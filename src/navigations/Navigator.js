import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Getstarted from '../screens/Getstarted';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Detail1 from '../screens/Detail1';
import CheckoutScreen from '../screens/CheckoutScreen';
import BottomNavigator from './BottomNavigator';

import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Get Started" component={Getstarted} />  
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Detail1" component={Detail1} />
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;