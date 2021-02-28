import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Auth from './pages/Authentication'
import Dashboard from './pages/Dashboard'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}