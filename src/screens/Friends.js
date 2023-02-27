import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Friends = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Friends

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1, 
  }
})