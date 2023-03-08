import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, close }) => {
    
    const navigation = useNavigation();
    
    return (
        <View>
            <View style={styles.container}> 
            <TouchableOpacity 
                onPress={() => navigation.openDrawer()}
            >
                <Ionicons name="menu-outline" size={28}  color="#000"/>
            </TouchableOpacity>
            <Text style={styles.header}>{title}</Text> 
            {
                (close) ?  
                <>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Ionicons name="close-circle-outline" size={28} color="#E50914" />
                    </TouchableOpacity>
                </> : null
            }
            </View>
            <View style={styles.line} />
        </View>
    )
}

export default Header; 

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        alignSelf: 'center',
    },
    line: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 20,
        borderColor: '#eeeee4',
    }
})