import { useState, useEffect } from 'react';

//tailwindcss
import '../../global.css';

//drawer
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent }  from '../components/drawer/CustomDrawerContent';

//redux
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store }  from '../redux/store';

//fonts
import * as Font from 'expo-font';

export default function RootLayout() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      Font.loadAsync({
        ProductSans: require('@assets/fonts/google-sans/ProductSans-Regular.ttf')
      }).then(() => setFontsLoaded(true));
    }, [])

    if (!fontsLoaded) return null;

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
