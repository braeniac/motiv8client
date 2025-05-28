import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store }  from '../redux/store';

export default function RootLayout() {
    return(
        <Provider store={store} >
            <GestureHandlerRootView style={{ flex : 1 }}>
                <StatusBar style="dark" />
                <Drawer />
            </GestureHandlerRootView>
        </Provider>
    )
}