import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import  Header  from '../components/common/header';
import  Calendar from '../components/feed/calendar';

export default function Home() {


    return(
      <View className='flex-1 bg-black'>
        <View className="h-1/2 bg-zinc-900 rounded-b-[44px] px-5 pt-5">
          <Header />
          <Calendar />
        </View>
      </View>
    )
}
