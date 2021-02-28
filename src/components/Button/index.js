import React from 'react'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function Button({ title, onPress}) {
  return (
    <RectButton 
      style={styles.buttonContainer} 
      {...{onPress}}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  )
}