import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default function Card({ svg, title, color }) {
    return (
        <View style={styles.container}>
            <View style={styles.svgCard}>
                
                {svg}
                <Text style={[styles.title, { color }]}>{title}</Text>

            </View>

        </View>
    )
}