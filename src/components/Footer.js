import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Footer = () => {


  const [modal, setModal] = useState(false); 

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <TouchableOpacity
        
      >
          <Text style={styles.text}>Start a Workout</Text>
      </TouchableOpacity>
    </View> 
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
      bottom: 0, 
      position: 'absolute', 
      marginBottom: 50,
      left: 0, 
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    line: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#eeeee4',
      bottom: 0, 
      position: 'absolute', 
      marginBottom: 40,
      left: 0, 
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: "#D0312D",
      fontWeight: '300'
    }
})