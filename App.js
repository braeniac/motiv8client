import * as React from 'react';

//navigation setup
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//unprotected routes
import Login from './src/screens/Login';
import Register from './src/screens/Register';
 
//protected routes
import Home from './src/screens/Home'; 
import Feed from './src/screens/Feed';
import Profile from './src/screens/Profile'; 
import Analytics from './src/screens/Analytics'; 
import Friends from './src/screens/Friends'; 
import CustomDrawer from './src/screens/CustomDrawer';
import Exercises from './src/screens/Exercises';
import Workout from './src/screens/Workout'; 

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={ props => <CustomDrawer {...props}/> }
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Login"                     component={Login}       />
      <Drawer.Screen name="Register"                  component={Register}    />
      <Drawer.Screen name="Home"                      component={Home}        />
      <Drawer.Screen name="Profile"                   component={Profile}     />
      <Drawer.Screen name="Feed"                      component={Feed}        />
      <Drawer.Screen name="Analytics"                 component={Analytics}   />
      <Drawer.Screen name="Exercises"                 component={Exercises}   />
      <Drawer.Screen name="Invite Friends to Motiv8"  component={Friends}     />
      <Drawer.Screen name="Workout"                   component={Workout}     />
    </Drawer.Navigator>
  );
}


//redux setup
import { Provider } from 'react-redux'; 
import store from './src/redux/store';  

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}
