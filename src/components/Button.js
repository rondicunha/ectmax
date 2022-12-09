import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ labelButton, onpress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.labelButton}> {labelButton} </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0B3553',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  labelButton: {
    color: '#EBD67C',
    fontSize: 19
  }
})
