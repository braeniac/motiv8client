import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';


import  Header  from '../../components/common/header';

export default function Profile() {

  const navigation = useNavigation(); 

    return(
      <View className='flex-1 bg-black'>
        <View className="h-1/2 bg-zinc-900 rounded-b-[44px] px-5 pt-5">
          <Header  />
        </View>

        <View className="h-1/2 bg-black justify-center items-center">
          <Text className="text-white text-xl">I'm in the bottom half</Text>
        </View>
      
      </View>
    )
}


