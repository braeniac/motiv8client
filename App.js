import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/screens/Home'; 
import Feed from './src/screens/Feed';
import Profile from './src/screens/Profile'; 
import Analytics from './src/screens/Analytics'; 
import Friends from './src/screens/Friends'; 
import CustomDrawer from './src/screens/CustomDrawer';
import Exercises from './src/screens/Exercises';
import Login from './src/screens/Login';
import Register from './src/screens/Register'; 

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
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
