import { StyleSheet, View, SafeAreaView, ScrollView} from 'react-native'; 
import React from 'react'; 

import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main'; 

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />

     
        <Main />



    
      <Footer />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
  
})