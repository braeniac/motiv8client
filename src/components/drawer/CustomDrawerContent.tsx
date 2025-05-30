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
    { label: 'feed',      icon: 'home-outline',          route: '/'          },
    { label: 'chat',      icon: 'chatbubbles-outline',   route: '/chat'      },
    { label: 'workouts',  icon: 'barbell-outline',       route: '/workout'   },
    { label: 'progress',  icon: 'podium-outline',        route: '/progress'  },
    { label: 'profile',   icon: 'person-outline',        route: '/profile'   },
    { label: 'settings',  icon: 'settings-outline',      route: '/setting'   }
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
                            <Text className='text-6xl font-sans font-extrabold text-zinc-400'>SS</Text>
                        </View>
                    }
                </TouchableOpacity>
                    <Text className='text-5xl font-sans font-semibold text-white mt-6'>Sydney</Text>
                    <Text className='text-5xl font-sans font-semibold text-white'>Sweeney</Text>
                    <Text className='text-xs font-sans text-white p-4'>sydney.sweeney.live@gmail.com</Text>
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
                                <Text className="text-zinc-400 mt-2 font-sans font-semibold text-md">{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </DrawerContentScrollView>
    )
}
