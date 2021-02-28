import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function Button({ title, onPress}) {
  return (
    <TouchableOpacity 
      style={styles.buttonContainer} 
      activeOpacity={0.8}
      {...{onPress}}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}