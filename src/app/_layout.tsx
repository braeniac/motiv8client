import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store }  from '../redux/store';

import { CustomDrawerContent }  from '../components/drawer/CustomDrawerContent';

export default function RootLayout() {
    return(
        <Provider store={store} >
            <GestureHandlerRootView style={{ flex : 1 }}>
                <StatusBar style="light" />
                <Drawer
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                    screenOptions={{ 
                        headerShown: false,
                        drawerHideStatusBarOnOpen: true,
                        swipeEnabled: false,
                        drawerStyle: {
                            width: "100%",
                            backgroundColor: '#000', 
                        },
                    }}
                >
                </Drawer>
            </GestureHandlerRootView>
        </Provider>
    )
}





