import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './Welcome'
import ChooseTopic from './ChooseTopic'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}}
      />
      <Stack.Screen 
        name="ChooseTopic" 
        component={ChooseTopic} 
        options={{ headerShown: false}}
      />

    </Stack.Navigator>
  )
}