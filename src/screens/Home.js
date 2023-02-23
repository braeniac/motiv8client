import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@react-native-material/core";

const Home = () => {
  return (
    <View>
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})