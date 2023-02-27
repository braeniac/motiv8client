import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    
    const navigation = useNavigation();
    
    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.openDrawer()}
                style={styles.container}
            >
                <Ionicons name="menu-outline" size={28}  />
            </TouchableOpacity>
            <View style={styles.line} />
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginTop: 40,
    },
    line: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 20
    }
})