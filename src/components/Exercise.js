import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'; 
import SearchBar from "react-native-dynamic-search-bar";

const Exercise = ({ modalVisable, setModalVisible }) => {

    const [search, setSearch] = useState(''); 

    return (
    <View style={styles.container}>

        <View>
            <SearchBar
                placeholder="Search for an exercise"
                onChangeText={(text) => setSearch(text)}
                onClearPress={() => setSearch("")}
                onSearchPress={() => console.log("Search Icon is pressed")}
                style={styles.search}
            />
        </View>



        <View style={styles.close}>
            <TouchableOpacity
                onPress={() => setModalVisible(!modalVisable)}
            >
                <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Exercise; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        height: '90%',
        marginTop: 50,
        marginHorizontal: 10,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        borderRadius: 20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }, 
    close: {
        position: 'absolute',
        bottom: 0, 
        marginBottom: 50,
        alignSelf: 'center'
    },
    closeText: {
        color: "#E50914",
        fontWeight: '300',
        fontSize: 16
    }, 
    search: {
        marginTop: 20,
        elevation: 10
    }

})