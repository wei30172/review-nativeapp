import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: '#c6cbef',
          // },
          // headerTintColor: "#000",
          drawerStyle: {
            backgroundColor: '#eee',
            width: 200,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerLabel: 'Go Home'
          }}/>
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{ drawerLabel: 'About Us' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}