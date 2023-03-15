import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    SplashScreen,
    WelcomeScreen,
    HomeScreen,
    RestaurantScreen,
    FoodScreen,
    CartScreen,
    LoginScreen,
    RegisterScreen
} from "../screens";

const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Food" component={FoodScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators;