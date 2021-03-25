import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

import styles from './styles'
import { All, HeartTwo, Bad, Night, Baby, Playing } from '../../../../assets/svg/Icons'
import { DailyCalm,  DaysCalm, Anxiet, SvgOne, SvgTwo} from '../../../../assets/svg/Meditate'
import { Card } from './components'

export default function Meditate() {
    const data = [
        {
            id: 1,
            title: "7 Days of Calm",
            svg: <DaysCalm />,
            height: 210,
            color: "#ffffff"
        },
        {
            id: 2,
            title: "Anxiet Release",
            svg: <Anxiet />,
            height: 167,
            color: "#FEF9F3"
        },
        {
            id: 3,
            title: "Svg One",
            svg: <SvgOne />,
            height: 167,
            color: "#FEF9F3"
        },
        {
            id: 4,
            title: "Svg Two",
            svg: <SvgTwo />,
            height: 210,
            color: "#ffffff"
        }
    ]
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Meditate</Text>
                    <Text style={styles.headerSubTitle}>
                        we can learn how to recognize when our minds are doing their normal everyday acrobatics.
                    </Text>
                </View>

                <View style={styles.selectList}>
                    <View style={styles.viewSelect}>
                        <RectButton style={styles.btnSelect}>
                            <All />
                        </RectButton>

                        <Text style={styles.textSelect}>All</Text>
                    </View>
                    <View style={styles.viewSelect}>
                        <RectButton style={[styles.btnSelect, { backgroundColor: "#A0A3B1"}]}>
                            <HeartTwo />
                        </RectButton>

                        <Text style={styles.textSelect}>My</Text>
                    </View>
                    <View style={styles.viewSelect}>
                        <RectButton style={[styles.btnSelect, { backgroundColor: "#A0A3B1"}]}>
                            <Bad />
                        </RectButton>

                        <Text style={styles.textSelect}>Anxious</Text>
                    </View>
                    <View style={styles.viewSelect}>
                        <RectButton style={[styles.btnSelect, { backgroundColor: "#A0A3B1"}]}>
                            <Night />
                        </RectButton>

                        <Text style={styles.textSelect}>Sleep</Text>
                    </View>
                    <View style={styles.viewSelect}>
                        <RectButton style={[styles.btnSelect, { backgroundColor: "#A0A3B1"}]}>
                            <Baby />
                        </RectButton>

                        <Text style={styles.textSelect}>Kids</Text>
                    </View>
                </View>
                
                <View style={styles.dailyCalm}>
                    <DailyCalm />
                    
                    <View style={styles.dailyCalmContent}>
                        <View style={styles.viewDailyText}>
                            <Text style={styles.dailyTextCalm}>Daily Calm</Text>
                            <Text style={styles.textPauseDaily}>APR 30 * PAUSE PRACTICE</Text>
                        </View>
                        <RectButton style={styles.btnPlaying}>
                            <Playing color="#F0F1F2"/>
                        </RectButton>
                    </View>

                
                </View>

                <View style={styles.viewList}>
                    <ScrollView>
                        <View style={{ flexDirection: "row"}}>
                            <View style={{marginRight: 10 }}>
                                {data
                                .filter((_, i) => i % 2 === 0)
                                .map((card) => (
                                    <Card 
                                        svg={card.svg}
                                        title={card.title}
                                        color={card.color}
                                    />
                                ))}

                            </View>
                            
                            <View>
                                {data
                                .filter((_, i) => i % 2 !== 0)
                                .map((card) => (
                                    <Card 
                                        svg={card.svg}
                                        title={card.title}
                                        color={card.color}
                                    />
                                ))} 
                            </View>
                        
                        </View>
                </ScrollView>
                </View>
                
            </ScrollView>
        </View>
    )
}