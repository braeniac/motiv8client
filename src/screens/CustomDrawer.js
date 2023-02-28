import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
        
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <View style={styles.menu}>
                    <Ionicons name="menu-outline" size={24} color="#D21401" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Home</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
            >
                <View style={styles.menu}>
                    <Ionicons name="ios-person-circle-outline" size={24} color="#D0312D" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Profile</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Feed')}
            >
                <View style={styles.menu}>
                    <Ionicons name="ios-share-social-outline" size={24} color="#D0312D" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Feed</Text>
                    </View>
                    
                </View>
            </TouchableOpacity> */}

            <TouchableOpacity
                onPress={() => navigation.navigate('Analytics')}
            >
                <View style={styles.menu}>
                    <Ionicons name="ios-analytics-outline" size={24} color="#D0312D" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Analytics</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Exercises')}
            >
                <View style={styles.menu}>
                    <Ionicons name="barbell-outline" size={24} color="#D0312D" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Exercise</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Invite Friends to Motiv8')}
            >
                <View style={styles.menu}>
                    <Ionicons name="share-outline" size={24} color="#D0312D" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Invite Friends to Motiv8</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.signout}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >
                <View style={styles.menu}>
                    <Ionicons name="exit-outline" size={24} color="#D0312D" />
                    <View style={styles.menuItem}>
                        <Text style={styles.menuItemText}>Sign out</Text>
                    </View>  
                </View>
            </TouchableOpacity>
        </View>
       
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 50,
        color: '#333',
        flex: 1, 
    },
    menu: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 20
    },
    menuItemText: {
        fontSize: 15,
        marginTop: 3,
        marginLeft: 20,
        fontWeight: '300'
    }, 
    signout : {
        bottom: 0, 
        position: 'absolute', 
        marginBottom: 50
    }
})