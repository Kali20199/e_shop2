import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icons from 'react-native-vector-icons/AntDesign'
import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { View } from 'react-native'
import { enableScreens } from 'react-native-screens'
import ProductContainer from './screens/Porducts/ProductContainer'
import Colors from './constant/Colors';
import { useStore } from '../store/store';
import GaneDetails from './screens/GameDetails/GaneDetails';



// const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export const navOptions = (Title: string, icon: string) => {

    const Header = {

        headerTintColor: 'white',
        headerStyle: { backgroundColor: Colors.primary },


        headerCenter: () => <Text style={ style.Text }> { Title } < /Text>,
    tabBarIcon: () => <Icons name={ icon } size = { 30} color = "#020000" />,
        headerTitle: () => <Text style={ style.Text }> { Title } < /Text>,
    drawerIcon: () => <MaterialCommunityIcons name={ icon } size = { 20} color = 'black' />
    }
return Header
}



const StackNav = () => {



    return <Tab.Navigator initialRouteName='Home' >
        <Tab.Screen name="Home" component = { ProductContainer } options = {{ ...navOptions('Admin', 'home'), headerShown: false }
} />
    < Tab.Screen name = "Cart" component = { ProductContainer } options = {{ ...navOptions('Admin', 'shoppingcart'), headerShown: false }} />
        < Tab.Screen name = "Setting" component = { ProductContainer } options = {{ ...navOptions('Admin', 'setting'), headerShown: false }} />
            < Tab.Screen name = "Profile" component = { ProductContainer } options = {{ ...navOptions('Admin', 'user'), headerShown: false }} />
                < /Tab.Navigator>
}



function MainNavigator(porps) {
    const { CategoryStore: { selectedGameCategory } } = useStore()


    return (

        <Stack.Navigator screenOptions= {{ animation: 'slide_from_right' }
} initialRouteName = 'Dashboard' >

    <Stack.Screen name="Dashboard" component = { StackNav } options = {{ headerShown: false }} />
        < Stack.Screen name = "Detail" component = { GaneDetails } options = {{ headerShown: true, ...navOptions('detail', '') }} />

            < /Stack.Navigator>

    )
}


const style = StyleSheet.create({

    Text: {
        color: 'white',
        fontSize: 20,
    },
})

export default MainNavigator