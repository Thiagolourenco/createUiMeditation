import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { ButtonIcon, ButtonSocialLogin, Button, CheckInfo } from '../../../components'
import { 
  Facebook, 
  Google, 
  VectorOne, 
  VectorTwo,
  VectorThree,
  VectorFour,
  IconEye
 } from '../../../assets/svg'
import { Feather } from '@expo/vector-icons'

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonIcon onPress={() => navigation.goBack()}/>
      <View style={styles.headerVector}>
        <VectorOne />
        <VectorTwo />
      </View>

      <View style={styles.footerVector}>
        <VectorThree />
        <VectorFour />
      </View>

      <Text style={styles.title}>Create your account</Text>

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
        <View style={styles.viewInput}>
          <TextInput 
            placeholder="users" 
            style={styles.input}
          />
          <Feather name="check" size={18} color="#6CB28E"/> 
        </View>

        <View style={styles.viewInput}>
          <TextInput 
            placeholder="email@gmail" 
            style={styles.input}
          />
          <Feather name="check" size={18} color="#6CB28E"/> 
        </View>

        
        <View style={styles.viewInput}>
        <TextInput 
          placeholder="Password"
          secureTextEntry 
          style={styles.input}
        />
         <IconEye />
        </View>

        
      </View>

      <View style={styles.viewPrivatePolicy}>
        <Text style={styles.textPrivatePolicy}>i have read the <Text style={styles.privateLink}>Privace Policy</Text></Text>
        <CheckInfo />
      </View>
      

      <Button title="GET STARTED" onPress={() => {}}/>
     
    </View>
  )
}