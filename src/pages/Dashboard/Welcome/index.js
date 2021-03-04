import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import TitleWelcome from '../../../assets/Title.png'
import {
  WelcomeGroup, 
  WelcomeEllipse, 
  WelcomeEllipse12, 
  WelcomeEllipse11,
  WelcomeEllipse10,
  Rectangle,
  VectorCloud,
  VectorBird
} from '../../../assets/svg/Welcome'
import {Button} from '../../../components'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Silent</Text>
        <Image source={TitleWelcome} style={styles.imageHeader}/>
        <Text>Moon</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Hi Afsar, Welcome</Text>
        <Text style={styles.subTitle}> to Silent Moon</Text>
      </View>
      
      <View style={styles.contentDescription}>
        <Text style={styles.descriptionText}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </Text>
      </View>
      
      <View style={styles.groupSvg}>
          <WelcomeEllipse />
        <View style={styles.ellipse12}>
          <WelcomeEllipse12 />  
        </View>
        <View style={styles.ellipse12}>
          <WelcomeEllipse11 />
        </View>
        <View style={styles.ellipse12}>
          <WelcomeEllipse10 />
        </View>

        <View style={styles.ellipse12}>
          <WelcomeGroup />
        </View>

        <View style={styles.VectorBird}>
          <VectorBird />
        </View>
        <View style={styles.VectorCloud}>
          <VectorCloud />
        </View>
        
        <View style={styles.rectangle}>
          <Rectangle />
        </View>

        <View style={{ bottom: 60}}>
          <Button 
            title="GET STARTED" 
            onPress={() => navigation.navigate('ChooseTopic')} 
            backgroundColor="#EBEAEC" 
            color="#3F414E"
          />
        </View>
       
      </View>
    </View>
  )
}