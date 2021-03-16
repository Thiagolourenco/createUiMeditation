import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles'
import {Button} from '../../../../components'

export default function Reminders() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            day: "SU",
            bool: true
        },
        {
            id: 2,
            day: "M",
            bool: true
        },
        {
            id: 3,
            day: "T",
            bool: true
        },
        {
            id: 4,
            day: "W",
            bool: true
        },
        {
            id: 5,
            day: "TH",
            bool: false
        },
        {
            id: 6,
            day: "F",
            bool: false
        },
        {
            id: 7,
            day: "S",
            bool: true
        },
    ]

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        What time would you like to meditate?
                    </Text>
                    <Text style={styles.subTitle}>
                        Any time you can choose but We recommend first thing in th morning.
                    </Text>
                </View>

                
                {Platform.OS === "ios" ? 
                    <View style={styles.viewHour}/>
                : (
                    <View>
                        <RectButton 
                            style={styles.selectHour}
                            onPress={() => setShow(true)}
                        >
                            <Text style={styles.selectHourText}>SELECT DATE</Text>
                        </RectButton>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="spinner"
                                onChange={onChange}
                            />
                        )}
                        
                    </View>
                    
                )}

            <View style={styles.content}>
                    <Text style={styles.title}>
                        What time would you like to meditate?
                    </Text>
                    <Text style={styles.subTitle}>
                        Everyday is best, but we recommend picking
                            at least five.  
                    </Text>
                </View>
                
                <View style={styles.viewDays}>
                    {data.map((item, key) => (
                        <TouchableOpacity 
                            key={key}
                            activeOpacity={0.8}
                            style={[
                                styles.day, 
                                { 
                                    backgroundColor: item.bool ? '#3F414E' : 'transparent',
                                    borderWidth: item.boll ? 0 : 1,
                                }]
                            }
                        >
                            <Text
                                style={[styles.dayText, { color: item.bool ? '#ffffff' : '#A1A4B2'}]}
                            >
                                {item.day}
                            </Text>
                        </TouchableOpacity>
                    ))}
                
                </View>

                <Button 
                    title="SAVE" 
                    onPress={() => navigation.navigate('Home')}
                    backgroundColor="#8E97FD" 
                    color="#F6F1FB"
                />
                <Text 
                    style={styles.footerText}
                    onPress={() => navigation.navigate('Home')}
                >
                    NO THANKS 
                </Text>
                
            </ScrollView>
        </View>
    )
}