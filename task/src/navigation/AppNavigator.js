import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import supabase from '../services/supabaseClient';
import useStore from '../store/useStore';
import { SupabaseClient } from '@supabase/supabase-js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Market" component={MarketScreen} />
        <Stack.Screen name ="supabaseClient" component={SupabaseClient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
