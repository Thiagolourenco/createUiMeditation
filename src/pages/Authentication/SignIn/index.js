import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import { ButtonIcon, ButtonSocialLogin, Button } from '../../../components'
import { 
  Facebook, 
  Google, 
  VectorOne, 
  VectorTwo,
  VectorThree,
  VectorFour
} from '../../../assets/svg'

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <ButtonIcon onPress={() => navigation.goBack()}/>
        <View style={styles.headerVector}>
          <VectorOne />
          <VectorTwo />
        </View>

        <View style={styles.footerVector}>
          <VectorThree />
          <VectorFour />
        </View>


        <Text style={styles.title}>Welcome Back!</Text>

        <View style={styles.viweGroupButton}>

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

        <Text style={styles.textLog}>OR LOG IN WITH EMAIL</Text>

        <View style={styles.viweGroupInput}>
          <TextInput 
            placeholder="Email address" 
            style={styles.input}
          />
          <TextInput 
            placeholder="Password"
            secureTextEntry 
            style={styles.input}
          />
        </View>

        <Button 
          title="LOG IN" 
          onPress={() => navigation.navigate('Dashboard')}
          backgroundColor="#8E97FD" 
          color="#F6F1FB"
        />
        <Text style={styles.textForgot}>Forgot Password?</Text>

        <View style={styles.viewFooter}>
          <Text style={styles.footer}>ALREADY HAVE AN ACCOUNT? </Text>
          <Text style={styles.footerSignUp} onPress={() => navigation.navigate('SignUp')}>SIGN UP</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}