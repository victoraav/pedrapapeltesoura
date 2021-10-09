import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import principal from './components/principal';
import credits from './components/credits';
import game from './components/game';
import howto from './components/howto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
        name = " "
        component={principal}>
        </Stack.Screen>

        <Stack.Screen
        name = "Credits"
        component = {credits}>
        </Stack.Screen>

        <Stack.Screen
        name = "Game"
        component = {game}>
        </Stack.Screen>

        <Stack.Screen
        name="HowToPlay"
        component={howto}>
        </Stack.Screen>


       

      </Stack.Navigator>

     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
