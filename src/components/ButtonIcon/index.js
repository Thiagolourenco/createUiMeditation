import React from 'react'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export default function ButtonIcon() {
  return (
    <RectButton style={styles.buttonIconContainer}>
      <AntDesign name="arrowleft" color="#3F414E" size={18}/>
    </RectButton>
  )
}