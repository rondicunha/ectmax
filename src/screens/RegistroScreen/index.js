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
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorCadastro, setErrorCadastro] = useState('')

  const registro = () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        if(errorCadastro) {
          setErrorCadastro(false)
        }

        // Signed in
        const user = userCredential.user
        navigation.navigate('HomeScreen', { idUser: user.uid })
        // ...
      })
      .catch(error => {
        setErrorCadastro(true)
        console.log(error)
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.labelPrincipal}> CRIE SUA CONTA</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={'#B0C4DE'}
        type="text"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor={'#B0C4DE'}
        type="text"
        onChangeText={text => setPassword(text)}
        value={password}
      />

      {errorCadastro === true && (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>Senha ou E-mail não pode ser cadastrado!</Text>
        </View>
      )}

      <TouchableOpacity
        disabled={email === '' || password === ''}
        onPress={registro}
        style={styles.buttonCadastro}
      >
        <Text style={styles.textButtonCadastro}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.termos}>
          Ao se registrar, você aceita nossos termos de uso e a nossa política
          de privacidade.
        </Text>
      </View>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  )
}
