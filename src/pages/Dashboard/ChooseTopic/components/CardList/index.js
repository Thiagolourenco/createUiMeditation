import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function CardList({ 
    height, 
    backgroundColor, 
    title, 
    svg,
    marginTop,
    color,
    onPress
}) {
    return (
        <RectButton 
            style={[
                styles.container,
                { height, 
                  backgroundColor,
                }
            ]}
            {...{ onPress }}
        >
            <View style={[styles.svg, {marginTop}]}>
                {svg}
            </View>
            <Text style={[styles.title, { color }]}>{title}</Text>
        </RectButton>
    )
}