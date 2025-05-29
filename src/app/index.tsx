import { View, Text, TouchableOpacity } from 'react-native';


export default function Home() {

    return(
      <View className='flex flex-1 bg-black'>
        <TouchableOpacity
          onPress={() => console.log('open left drawer')}
        >
          <Text className='text-white m-10'>oepn</Text>
        </TouchableOpacity>
      </View>
    )
}