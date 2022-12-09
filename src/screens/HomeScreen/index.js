import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

import Header from '../../components/Header'
import Barra from '../../components/Barra'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />
      <Barra navigation={navigation} />
    </View>
  )
}
