import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import {Header} from '../../../../assets/svg/CourseDetails'
import styles from './styles'
import {ArrowBack, Like, Download, Heart, Earphone, Playing} from '../../../../assets/svg/Icons'

export default function CourseDetails() {
    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            playing: true,
            title: "Focus Attention",
            mins: "10 MIN"
        },
        {
            id: 3,
            playing: false,
            title: "Body Scan",
            mins: "5 MIN"
        },
        {
            id: 3,
            playing: false,
            title: "Making Happiness",
            mins: "3 MIN"
        }
    ]

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Header />
                    <View style={styles.headerButton}>
                        <RectButton 
                            style={styles.buttonArrowBack}
                            onPress={() => navigation.goBack()}
                        >
                            <ArrowBack /> 
                        </RectButton>
                        
                        <View style={styles.viewGroupButton}>
                            <RectButton style={[
                                styles.buttonArrowBack, {
                                    backgroundColor: "rgba(3,23,76,0.5)"
                                }
                            ]}>
                                <Like />
                            </RectButton>
                            <RectButton 
                            style={[
                                styles.buttonArrowBack, {
                                    backgroundColor: "rgba(3,23,76,0.5)",
                                    marginLeft: 10
                                }
                            ]}>
                                <Download />
                            </RectButton>
                        </View>
                    </View>
                </View>
                
                
                <View style={styles.content}>
                    <Text style={styles.title}>Happy Morning</Text>
                    <Text style={styles.textCourse}>COURSE</Text>
                    <Text style={styles.textDescription}>
                        Ease the mind into a restful night’s sleep  with
                        these deep, amblent tones.
                    </Text>

                    <View style={styles.viewStatusViews}>
                        <View style={styles.viewContentViews}>
                            <Heart />
                            <Text style={styles.textViews}>24.234 Favorits</Text>
                        </View>
                        <View style={[styles.viewContentViews, { marginLeft: 40}]}>
                            <Earphone />
                            <Text style={styles.textViews}>34.234 Lestening</Text>
                        </View>
                    </View>

                    <Text style={styles.titleContent}>Pick a Nnrrator</Text>

                    <View style={styles.viewHeader}>
                        <TouchableOpacity 
                            style={styles.btnActiveMale}
                            activeOpacity={0.8}
                        >
                            <Text style={[styles.btnActiveMaleText, { color: "#8E97FD"}]}>MALE VOICE</Text>
                            <View style={styles.viewBorder} />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.btnActiveMale, { marginBottom: 10}]}
                            activeOpacity={0.8}
                        >
                            <Text 
                                style={[
                                    styles.btnActiveMaleText, 
                                    { color: "#A1A4B2"}
                                ]}>
                                FEMALE VOICE
                            </Text>
                        </TouchableOpacity>
                
                    </View>
                    <View style={styles.viewRow}/>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        {data.map((item, index) => (
                            <>
                            <TouchableOpacity 
                                style={styles.viewPlaying} 
                                key={index}
                                activeOpacity={0.8}    
                            >
                                <View style={[
                                    styles.button,
                                    {
                                        backgroundColor: item.playing ? '#8E97FD' : 'transparent',
                                        borderWidth: item.playing ? 0 : 1,
                                    }]}>
                                    <Playing color={item.playing ? '#F6F1FB' : '#A1A4B2'} />
                                </View>
                                <View>
                                    <Text style={styles.titlePlaying}>{item.title}</Text>
                                    <Text style={styles.subTitlePlaying}>{item.mins}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.viewLine}/>
                            </>
                        ))}
                    </View>
                   
                </View>
            </ScrollView>
        </View>
    )
}