import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignUpAndSignIn from './SingnUpAndSignIn'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="SignUpAndSignIn">
      <Stack.Screen name="SignUpAndSignIn" component={SignUpAndSignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}