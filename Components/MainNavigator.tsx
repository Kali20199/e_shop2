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
import { observer } from 'mobx-react-lite';
// import Reanimated from './screens/GameDetails/Reanimated';
import CartScreen from './screens/Cart/CartScreen';

enableScreens()

// const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export const navOptions = (Title: string, icon: string, color?: string) => {

    const Header = {

        headerTintColor: 'white',
        headerStyle: { backgroundColor: color },


        headerCenter: () => <Text style={style.Text}> {Title} </Text>,
        tabBarIcon: () => <Icons name={icon} size={30} color="#020000" />,
        headerTitle: () => <Text style={style.Text}> {Title} </Text>,
        drawerIcon: () => <MaterialCommunityIcons name={icon} size={20} color='black' />
    }
    return Header
}



const StackNav = ({Cart}:any) => {
 


    return <Tab.Navigator initialRouteName='Home' >
        <Tab.Screen name="Home" component={ProductContainer} options={{ ...navOptions('Admin', 'home'), headerShown: false }
        } />
        <Tab.Screen name="Cart" component={CartScreen} options={{ ...navOptions('Admin', 'shoppingcart'), headerShown: false,tabBarBadge:Cart.length }} />
        <Tab.Screen name="Setting" component={ProductContainer} options={{ ...navOptions('Admin', 'setting'), headerShown: false }} />
        <Tab.Screen name="Profile" component={ProductContainer} options={{ ...navOptions('Admin', 'user'), headerShown: false }} />
    </Tab.Navigator>
}



function MainNavigator() {
    const { ProductStore: { selectedProduct },CartStore:{MyCart,count} } = useStore()


    return (

        <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }
        } initialRouteName='Dashboard' >

            <Stack.Screen name="Dashboard" component={()=><StackNav Cart={MyCart}/>} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={GaneDetails} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
            {/* <Stack.Screen name="Reanimated" component={Reanimated} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} /> */}

        </Stack.Navigator>

    )
}


const style = StyleSheet.create({

    Text: {
        color: 'white',
        fontSize: 20,
    },
    x: {
        color: '#eeeee'
    }
})

export default observer(MainNavigator)