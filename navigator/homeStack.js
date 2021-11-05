import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails'
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReviewZone"
        component={Home}
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation} title="Welcome"/>,
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details"
        }}
      />
    </Stack.Navigator>
  );
}