import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import {Home, Sleep, Meditate, Music, User} from '../../assets/svg/Icons'

export default function BottomTabCustom({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            {state.routes.map((routes, index) => {
                const { options } = descriptors[routes.key];
                const label = options.tabBarLabel !== undefined 
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title 
                    : routes.name
                
                const isFocused = state.index === index;

                function handleOpress() {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: routes.key,
                        canPreventDefault: true,
                    })

                    if(!isFocused && !event.defaultPrevented) {
                        navigation.navigate(routes.name)
                    }
                }

                function handleOnLongPress() {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: routes.key
                    })
                }

                return (
                    <View key={index}>

                        <Pressable
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={handleOpress}
                            // onLongPress={handleOnLongPress}
                            style={[styles.btnBottom, { backgroundColor: isFocused ? '#8E97FD' : 'transparent'}]}
                            activeOpacity={0.8}
                            hitSlop={20}
                        >
                            {label === 'Home' 
                                ? <Home color={isFocused ? '#FFFFFF' : '#A0A3B1' }/>
                                : label === 'Sleep' 
                                ? <Sleep color={isFocused ? '#FFFFFF' : '#A0A3B1' }/>
                                : label === 'Meditate'
                                ? <Meditate color={isFocused ? '#FFFFFF' : '#A0A3B1' }/>
                                : label === 'Music'
                                ? <Music color={isFocused ? '#FFFFFF' : '#A0A3B1' }/>
                                : <User color={isFocused ? '#FFFFFF' : '#A0A3B1' }/>
                            }
                        </Pressable>

                        <Text 
                            style={[styles.textLabel, 
                            { color: isFocused ? '#8E97FD' : '#A0A3B1' }
                        ]}>
                            {label}
                        </Text>
                    </View>
                    
                )
            })}
           
        </View>
    )
}