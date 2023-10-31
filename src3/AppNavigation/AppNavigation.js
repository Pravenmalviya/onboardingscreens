import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
const AppNavigation =()=>{
    return(
        <AppNavigation>
        <Stack.Navigator >
        <Stack.Screen/>
        </Stack.Navigator>
        </AppNavigation>
    );
}


export default AppNavigation;