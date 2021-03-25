import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Meditate from './Meditate'
import {WelcomeSleep} from '../BetterSleep'

import { BottomTabCustom } from '../../../components'

const Bottom = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Bottom.Navigator 
            nitialRouteName="Home" 
            tabBar={props => <BottomTabCustom {...props}/>}
        >
            <Bottom.Screen name="Home" component={Home} />
            <Bottom.Screen name="Sleep" component={WelcomeSleep} />
            <Bottom.Screen name="Meditate" component={Meditate} />
            <Bottom.Screen name="Music" component={Home} />
            <Bottom.Screen name="Afsar" component={Home} />
        </Bottom.Navigator>
    )
}