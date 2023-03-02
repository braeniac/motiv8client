import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Body = () => {

    const [modalVisable, setModalVisible] = useState(false); 

    return (
        <ScrollView style={styles.container}>
            <ScrollView>

            <View>
                <TouchableOpacity 
                    style={styles.picker}
                    onPress={() => setModalVisible(!modalVisable)}
                >
                    <Text style={styles.text}>+ Exercise</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType='slide'
                transparent={false}
                visible={modalVisable}
            >
                <View>


                    
                </View>

            </Modal>


            </ScrollView>
        </ScrollView>
  )
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
    }, 
    picker: {
        marginLeft: 20,
        marginTop: 10
    },
    text: {
        color: "#E50914",
        fontWeight: 'bold'
    }
})


