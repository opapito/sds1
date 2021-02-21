import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  AppLoading  from 'expo-app-loading';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';


export default function App() {
    const [fontsLoaded] = useFonts({
      Play_400Regular,
      Play_700Bold    
    });

    if (!fontsLoaded){
      return <AppLoading />
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello React Native!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#FFF',
    fontSize: 50
  }
});