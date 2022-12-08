import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import firebase from '../../../config/firebase'
import { circle } from 'react-native/Libraries/Animated/Easing'

export default function Login(navigation) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erroLogin, setErroLogin] = useState('')

  const loginFirebase = () => {}

  useEffect(() => {}, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.ect}> ECT<Text style={styles.max}>MAX</Text>

      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        type="text"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        type="text"
        onChangeText={text => setSenha(text)}
        value={senha}
      />

      {erroLogin === true 
      ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Senha ou E-mail invalido!</Text>
        </View>
        ) 
      : (
        <View />
        )}
      {email === '' || senha === '' 
      ? (
        <TouchableOpacity disabled={true} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        ) 
      : 
        (
        <TouchableOpacity disabled={false} style={styles.buttonLogin}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        )}

      <Text style={styles.registration}>
        Não tem uma conta?
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate('RegistroScreen')}
        >
          Registre-se
        </Text>
      </Text>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  )
}
