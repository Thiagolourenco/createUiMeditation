import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Slider from '@react-native-community/slider';

import { ArrowBack, Download, Like, PauseOne, PauseTwo } from '../../../../assets/svg/Icons'
import { 
    MusicImageOne, 
    MusicImageTwo, 
    MusicImageThree, 
    MusicImageFor,
    Group68,
    Group69
} from '../../../../assets/svg/MusicV2'

import styles from './styles'

export default function MusicV2() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.musicImageOne}>
                <MusicImageOne />
            </View>
            
            <View style={styles.musicImageTwo}>
                <MusicImageTwo />
            </View>
            
            <View style={{ position: "absolute", bottom: 0, flexDirection: "row"}}>
                <View style={styles.musicImageFor}>
                    <MusicImageFor />
                </View>

                <View style={styles.musicImageThree}>
                    <MusicImageThree />
                </View>
            </View>
         
                        
            
             <View>
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
                                    backgroundColor: "#B6B8BF"
                                }
                            ]}>
                                <Like />
                            </RectButton>
                            <RectButton 
                            style={[
                                styles.buttonArrowBack, {
                                    backgroundColor: "#B6B8BF",
                                    marginLeft: 10
                                }
                            ]}>
                            <Download />
                        </RectButton>
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentTitle}>Focus Attention</Text>
                <Text style={styles.contentSubTitle}>7 DAYS OF CALM</Text>

                <View style={styles.viewGroup}>
                    <Group69 />
                    
                    <View style={styles.viewOpacity}>
                        <RectButton style={styles.btnPause}>
                            <View style={styles.pauseOneStyle}>
                                <PauseOne />
                            </View>        
                            <PauseTwo />
                        </RectButton>

                    </View>
                
                    <Group68 />
                </View>

                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    thumbTintColor="#3F414E"
                    minimumTrackTintColor="#3F414E"
                    maximumTrackTintColor="#A0A3B1"
                    value={0.1}
                />
                
                <View style={styles.viewMin}>
                    <Text style={styles.textValueMin}>01:30</Text>
                    <Text style={styles.textValueMin}>45:00</Text>
                </View>
            </View>

         
        </View>
    )
}