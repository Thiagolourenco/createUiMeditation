import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './Welcome'
import ChooseTopic from './ChooseTopic'
import {Reminders, Home, CourseDetails, MusicV2} from './ReduceStress'
import {WelcomeSleep} from './BetterSleep'

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
      <Stack.Screen 
        name="Reminders" 
        component={Reminders} 
        options={{ headerShown: false}}
      />
      <Stack.Screen 
        name="WelcomeSleep" 
        component={WelcomeSleep} 
        options={{ headerShown: false}}
      />

      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}}
      />

      <Stack.Screen 
        name="CourseDetails"
        component={CourseDetails}
        options={{ headerShown: false}}
      />

      <Stack.Screen 
        name="MusicV2"
        component={MusicV2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}