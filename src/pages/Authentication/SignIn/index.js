import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { ButtonIcon, ButtonSocialLogin } from '../../../components'
import { Facebook, Google } from '../../../assets/svg'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <ButtonIcon />
      <Text style={styles.title}>Welcome Back!</Text>

      <View>

        <ButtonSocialLogin 
          onPress={() => {}} 
          title="CONTINUE WITH FACEBOOK"
          backgroundColor="#7583CA"
          Icon={Facebook}
          textColor="#F6F1F8"

        />

        <ButtonSocialLogin 
          onPress={() => {}} 
          title="CONTINUE WITH GOOGLE"
          backgroundColor="transparent"
          textColor="#3F414E"
          Icon={Google}
          borderWidth={1}
          borderColor="#EBEAEC"
        />

      </View>
    </View>
  )
}