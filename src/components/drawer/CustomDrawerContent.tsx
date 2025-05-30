import { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import { 
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

import useImagePicker from '../../hooks/useImagePicker';

const drawerItems = [
    { label: 'Feed',     icon: 'home-outline',      route: '/' },
    { label: 'Chat',     icon: 'chatbox-outline',   route: '/chat'},
    { label: 'Workouts', icon: 'barbell-outline',   route: '/workout'},
    { label: 'Progress', icon: 'analytics-outline', route: '/progress'},
    { label: 'Profile',  icon: 'person-outline',    route: '/profile'},
    { label: 'Settings', icon: 'settings-outline',  route: '/setting'}
];

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {

    const router = useRouter();
    const { image, pickImage } = useImagePicker(); 
    
    return(
        <DrawerContentScrollView {...props}>
            <View className='justify-between flex-row'>
                <TouchableOpacity
                    onPress={() => props.navigation.closeDrawer()}
                >
                    <Ionicons name="chevron-back-sharp" size={24} color="#A1A1AA" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('logout')}
                >
                    <Ionicons name="log-out-outline" size={24} color="#A1A1AA" />
                </TouchableOpacity>
            </View>
            <View className='p-8 items-center'>
                <View className='justify-center items-center'>
                <TouchableOpacity 
                    className='mb-2'
                    onPress={pickImage}
                    
                >
                    {
                        image ? (
                            <Image 
                                source={{ uri : image }}
                                className='w-36 h-36 rounded-[32px]'
                            />
                        ) :
                        <View className='items-center justify-center  w-36 h-36 rounded-[32px] bg-zinc-900'>
                            <Text className='text-3xl font-extrabold text-white'>EW</Text>
                        </View>
                    }  
                </TouchableOpacity>
                    <Text className='text-5xl font-sans font-semibold text-zinc-400 mt-6'>Emma</Text>
                    <Text className='text-5xl font-sans font-semibold text-zinc-400'>Wilson</Text>
                    <Text className='text-xs font-sans text-zinc-400 p-4'>emma.wilson.live@gmail.com</Text>
                </View>
            </View>
            <View className="flex-row flex-wrap justify-between p-4 space-y-2">
                {
                    drawerItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => router.push(item.route)}
                            className="w-[49%] aspect-square bg-zinc-900 rounded-2xl justify-center mb-4"
                        >   
                            <View className='pl-8'>
                                <Ionicons name={item.icon as any} size={16} color="#A1A1AA" />
                                <Text className="text-zinc-400 mt-2 font-semibold text-md">{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </DrawerContentScrollView>
    )
}