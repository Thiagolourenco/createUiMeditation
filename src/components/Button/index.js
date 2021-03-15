import React from 'react'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function Button({ title, onPress, backgroundColor, color}) {
  return (
    <RectButton 
      style={[styles.buttonContainer, { backgroundColor}]} 
      {...{onPress}}
      >
      <Text style={[styles.buttonText, {color}]}>{title}</Text>
    </RectButton>
  )
}