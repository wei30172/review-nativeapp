import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import RootDrawer from './navigator/drawers'

export default function App() {
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

  if (fontsLoaded) {
    return (
      <RootDrawer />
    );
  } else {
    return (
      <AppLoading
        onError={console.warn}
      />
    )
  }
}