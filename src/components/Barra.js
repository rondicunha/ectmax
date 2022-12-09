import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from './Button'

export default function Barra({ navigation }) {
  return (
    <ScrollView style={styles.barra}>
      <View style={styles.card}>
        <Image style={styles.foto} source={require('../images/vga-img.png')} />

        <Button
          style={styles.button}
          labelButton="VGA"
          onpress={() => navigation.navigate('VgaScreen')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.foto}
          source={require('../images/calculo-img.png')}
        />

        <Button
          style={styles.button}
          labelButton="Cálculo I"
          onpress={() => navigation.navigate('CalculoScreen')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.foto}
          source={require('../images/preCalculo-img.png')}
        />

        <Button
          style={styles.button}
          labelButton="Pré-Cálculo"
          onpress={() => navigation.navigate('PrecalculoScreen')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.foto}
          source={require('../images/quimica-img.png')}
        />

        <Button
          style={styles.button}
          labelButton="Química"
          onpress={() => navigation.navigate('QuimicaScreen')}
        />
      </View>

      <View style={styles.card}>
        <Image style={styles.foto} source={require('../images/ple-img.png')} />

        <Button
          style={styles.button}
          labelButton="PLE I"
          onpress={() => navigation.navigate('PleScreen')}
        />
      </View>

      <View style={styles.card}>
        <Image style={styles.foto} source={require('../images/cts-img.png')} />

        <Button
          style={styles.button}
          labelButton="CTS"
          onpress={() => navigation.navigate('CtsScreen')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  barra: {
    backgroundColor: '#003153',
    padding: 7,
    flex: 1
  },

  card: {
    padding: 10,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: '#003153',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#222',
    shadowRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  foto: {
    height: 150,
    width: 250,
    borderRadius: 20
  },

  button: {}
})
