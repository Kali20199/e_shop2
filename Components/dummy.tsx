import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

const Tab = createBottomTabNavigator();
const TabNavigator = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator()

function dummy() {
  return (
    <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }} initialRouteName='Dashboard' >
    <Stack.Screen name="1" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="2" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

    <Stack.Screen name="3" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="4" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

    <Stack.Screen name="5" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="6" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="7" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="8" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

     <Stack.Screen name="9" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="10" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="11" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="12" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="13" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="14" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

    <Stack.Screen name="15" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="16" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="17" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="18" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />


    <Stack.Screen name="19" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="20" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

    <Stack.Screen name="21" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="22" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

    <Stack.Screen name="23" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="24" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="25" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="26" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

     <Stack.Screen name="27" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="28" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="29" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="30" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="31" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="32" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />

    <Stack.Screen name="33" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="34" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="35" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
    <Stack.Screen name="36" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
  )
}

export default dummy