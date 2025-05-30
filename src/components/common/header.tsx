import { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Platform, SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface headerProps {
    icon?: keyof typeof Ionicons.glyphMap,
    handlePress?: () => void
}

export default function Header({ icon, handlePress } : headerProps) {

    const navigation = useNavigation();

    return(
        <SafeAreaView
            className='bg-zinc-900 pt[${StatusBar.currentHeight ?? 0}px] justify-between flex-row'
            style={{
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}
        >
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Ionicons name="menu" size={24} color="#A1A1AA" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handlePress}
            >
                <Ionicons name={icon} size={22} color="#A1A1AA" />
            </TouchableOpacity>

        </SafeAreaView>
    )
}
