import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Finish = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <TouchableOpacity
        
      >
          <Text style={styles.text}>Finish</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Finish; 

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
        color: "#E50914",
        fontWeight: '300',
        fontSize: 16
      },
})