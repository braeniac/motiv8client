import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation(); 
    return(
      <View className='flex flex-1 bg-black'>
        <TouchableOpacity
          onPress={() =>  navigation.dispatch(DrawerActions.openDrawer()) }
        >
          <Text className='text-white m-10'>oepn</Text>
        </TouchableOpacity>
      </View>
    )
}



