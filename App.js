import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './src/screens/LoginScreen'
import RegistroScreen from './src/screens/RegistroScreen'
import HomeScreen from './src/screens/HomeScreen'
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistroScreen"
          component={RegistroScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#003153'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
