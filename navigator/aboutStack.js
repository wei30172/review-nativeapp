import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutUs"
        component={About}
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation} title="About Us"/>,
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
}