import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from '../components/Header'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1, 
  }
})