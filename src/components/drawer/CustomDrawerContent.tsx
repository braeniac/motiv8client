import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { 
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';

const drawerItems = [
    { label: 'Feed',     icon: 'home-outline',      route: '/' },
    { label: 'Chat',     icon: 'chatbox-outline',   route: '/chat'},
    { label: 'Workouts', icon: 'barbell-outline',   route: '/workout'},
    { label: 'Progress', icon: 'bar-chart-outline', route: '/progress'},
    { label: 'Profile',  icon: 'person-outline',    route: '/profile'},
    { label: 'Settings', icon: 'settings-outline',  route: '/setting'}
];

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {

    const router = useRouter();

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
                    onPress={() => console.log('upload new picture')}
                >
                    <Image 
                        source={{ uri : 'https://picsum.photos/id/633/200/300' }}
                        className='w-28 h-28 rounded-[32px]'
                    />
                    
                </TouchableOpacity>
                    <Text className='text-4xl font-sans font-light text-white'>Emma</Text>
                    <Text className='text-4xl font-sans font-light text-white'>Wilson</Text>
                    <Text className='text-xs font-sans text-white p-4'>emma.wilson.live@gmail.com</Text>
                </View>
            </View>
            <View className="flex-row flex-wrap justify-between p-4 mt-4 space-y-2">
                {drawerItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => router.push(item.route)}
                        className="w-[48%] aspect-square bg-zinc-900 rounded-2xl justify-center mb-4"
                    >   
                    <View className='pl-8'>
                        <Ionicons name={item.icon as any} size={16} color="white" />
                        <Text className="text-white mt-2 font-semibold text-md">{item.label}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </View>
        </DrawerContentScrollView>
    )
}