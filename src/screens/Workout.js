import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import Header from '../components/Header'; 
import Start from '../components/Start'; 
import Finish from '../components/Finish';
import Body from '../components/Body';

const Workout = () => {

  return (
    <View style={styles.container}>
      <Header close={true} />  
      <Start />

      <Body />

      <Finish />
    </View>
  )
}

export default Workout; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  }, 
  picker: {
    marginLeft: 20,
    marginTop: 10
  },
  pickerText: {
    color: "#E50914",
    fontWeight: 'bold'
  }
})



// <View>
// <TouchableOpacity
//   style={styles.picker}
//   onPress={() => console.log('open modal')}
// >
//   <Text style={styles.pickerText}>+ Exercise</Text>
// </TouchableOpacity>
// </View>