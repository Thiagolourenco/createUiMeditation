import React from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import Vector from '../../../assets/Vector.png'
import {Button} from '../../../components'

export default function SignUpAndSignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Vector} style={styles.ImageContent}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>We are what we do</Text>
        <Text style={styles.footerSubTitle}>
          Thousand of people are usign silent moon  
          for smalls meditation 
        </Text>
        <View style={styles.groupButton}>
          <Button title="SIGN UP" onPress={() => {}}/>
          <View style={styles.textView}>
            <Text style={styles.textCreate}>ALREADY HAVE AN ACCOUNT? </Text>
            <Text style={styles.textBtn} onPress={() => navigation.navigate('SignIn')}>LOG IN</Text>
          </View>
        </View>
        
      </View>
    </View>
  )
}