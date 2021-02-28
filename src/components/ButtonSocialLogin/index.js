import React from 'react'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

export default function ButtonSocialLogin({ 
    title, 
    onPress, 
    backgroundColor, 
    Icon,
    borderWidth,
    borderColor,
    textColor
  }) {
  return (
    <RectButton 
      style={[
        styles.buttonContainer, 
        { 
          backgroundColor,
          borderWidth,
          borderColor
        }]} 
      {...{onPress}}
      >
      <Icon />
      <Text style={[styles.buttonText, { color: textColor}]}>{title}</Text>
    </RectButton>
  )
}