import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default function CardList({ 
    height, 
    backgroundColor, 
    title, 
    svg,
    marginTop,
    color
}) {
    return (
        <View 
            style={[
                styles.container,
                { height, 
                  backgroundColor,
                }
            ]}
        >
            <View style={[styles.svg, {marginTop}]}>
                {svg}
            </View>
            <Text style={[styles.title, { color }]}>{title}</Text>
        </View>
    )
}