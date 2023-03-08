import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [choice, setChoice] = useState(''); 


  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
      >
          <Text style={styles.text}>Start a Workout</Text>
      </TouchableOpacity>

      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalView}>

          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>Choose your workout day</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.close}
            >
              <Ionicons name="close-circle-outline" size={28} color="#E50914" />
            </TouchableOpacity>
          </View>

          <View>
            <View>
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  setChoice('push')
                  navigation.navigate('Workout') 
                }}
              >
                <Text style={styles.itemText}>PUSH</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  setChoice('pull')
                  navigation.navigate('Workout') 
                }}
              >
                <Text style={styles.itemText}>PULL</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  setChoice('leg')
                  navigation.navigate('Workout') 
                }}
              >
                <Text style={styles.itemText}>LEG</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </Modal>
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
      color: "#E50914",
      fontWeight: '300',
      fontSize: 20
    },
    modalView: {
      backgroundColor: 'white',
      padding: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      width:320,
      height: 200,
      borderRadius: 20,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      marginBottom: 20,
      alignSelf: 'center',
      position: 'absolute',
      bottom: 0
    },
    modalTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
    },
    modalTitleText: {
      fontSize: 16,
      fontWeight: '300',
      marginTop: 5
    },
    close: {
      left: 0
    }, 
    title: {
      fontWeight: '300', 
      marginBottom: 10
    }, 
    item: {
      marginBottom: 10,
    },
    itemText: {
      fontWeight: '200',
      fontSize: 22,
      marginTop: 5,
    }
})