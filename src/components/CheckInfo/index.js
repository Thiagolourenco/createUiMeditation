import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import styles from './styles'

export default function CheckInfo() {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton style={styles.checkInfo} onPress={() => setChecked(!checked)}>
      {checked ? (
        <Feather name="check" size={18} color="#8E97FD"/> 
      )
      : null}
      
    </RectButton>
  )
}