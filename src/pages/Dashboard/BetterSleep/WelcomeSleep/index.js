import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { Sleep, Stars, StarsTwo, Moon, Eclipse, Bird } from '../../../../assets/svg/WelcomeSleep'
import { Button } from '../../../../components'

export default function WelcomeSleep() {
    return (
        <View style={styles.container}>
            <Sleep />
            <View style={styles.stars}>
                <Stars />
            </View>

            <View style={styles.stars}>
                <StarsTwo />
            </View>

            <View style={styles.moon}>
                <Moon />
            </View>

            <View style={[styles.moon, { left: 90, top: 45}]}>
                <Eclipse />
            </View>

            <View style={styles.content}>
                <Text style={styles.contentTitle}>Welcome to Sleep </Text>
                <Text style={styles.contentDescription}>Explore the new king of sleep. It uses sound and vesualization to create perfect conditions for refreshing sleep.</Text>

                <View style={styles.svgBird}>
                    <Bird />
                </View>
                
                <View style={styles.btnGet}>
                    <Button 
                        title="GET STARTED"
                        color="#F6F1FB"
                        backgroundColor="#8E97FD"
                        onPress={() => {}}
                    />
                </View>
                
            </View>
        </View>
    )
}