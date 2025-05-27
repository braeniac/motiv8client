import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux";
import { store } from './src/redux/store'; 

import "./global.css";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />

      

    </Provider>
  );
}
