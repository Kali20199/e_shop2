import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icons from 'react-native-vector-icons/AntDesign'
import { Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { enableScreens } from 'react-native-screens'
import ProductContainer from './screens/Porducts/ProductContainer'
import Colors from './constant/Colors';
import { useStore } from '../store/store';
import GaneDetails from './screens/GameDetails/GaneDetails';
import { observer } from 'mobx-react-lite';
// import Reanimated from './screens/GameDetails/Reanimated';
import CartScreen from './screens/Cart/CartScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Shippment from './screens/Checkout/Shippment';
import Payment from './screens/Checkout/Payment';
import Confirm from './screens/Checkout/Confirm';
import LoginScreen from './screens/AuthScreen/LoginScreen';
import RegisterScreen from './screens/AuthScreen/RegisterScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import MyOrdersScreen from './screens/MyOrdersScreen' 
import AddminNavigation from './AdminScreens/AddminNavigation';
enableScreens()

//  const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();
const TabNavigator = createMaterialTopTabNavigator();

export const navOptions = (Title: string, icon: string, color = "#fcfcfc") => {

    const Header = {

        headerTintColor: 'white',
        headerStyle: { backgroundColor: color },


        headerCenter: () => <Text style={style.Text}> {Title} </Text>,
        tabBarIcon: () => <Icons name={icon} size={24} color={color} />,
        headerTitle: () => <Text style={style.Text}> {Title} </Text>,
        drawerIcon: () => <MaterialCommunityIcons name={icon} size={15} color='black' />
    }
    return Header
}




// function NavDrawer(props:any) {
//     return (
//       <Drawer.Navigator initialRouteName="MyProfile" >
//         <Drawer.Screen name="Shippment" component={ProductContainer} options={{ ...navOptions("MyProfile", "user") }} />
//         <Drawer.Screen name="App Setting" component={ProductContainer} options={navOptions("App Setting", "settings")} />
//         <Drawer.Screen name="Logout" component={ProductContainer} options={{ ...navOptions("Logout", "log-out"), headerShown: false }} />
//         <Drawer.Screen name="All_Rreservations" component={ProductContainer} options={navOptions("My Reservations", "biscuit-clock")} />


//         <Drawer.Screen name="1" component={ProductContainer} options={{ ...navOptions("MyProfile", "user") }} />
//         <Drawer.Screen name="2 Setting" component={ProductContainer} options={navOptions("App Setting", "settings")} />
//         <Drawer.Screen name="3" component={ProductContainer} options={{ ...navOptions("Logout", "log-out"), headerShown: false }} />
//         <Drawer.Screen name="4" component={ProductContainer} options={navOptions("My Reservations", "biscuit-clock")} />

//         <Drawer.Screen name="5" component={ProductContainer} options={{ ...navOptions("MyProfile", "user") }} />
//         <Drawer.Screen name="6 Setting" component={ProductContainer} options={navOptions("App Setting", "settings")} />
//         <Drawer.Screen name="7" component={ProductContainer} options={{ ...navOptions("Logout", "log-out"), headerShown: false }} />
//         <Drawer.Screen name="8" component={ProductContainer} options={navOptions("My Reservations", "biscuit-clock")} />


//         <Drawer.Screen name="51" component={ProductContainer} options={{ ...navOptions("MyProfile", "user") }} />
//         <Drawer.Screen name="64 Setting" component={ProductContainer} options={navOptions("App Setting", "settings")} />
//         <Drawer.Screen name="75" component={ProductContainer} options={{ ...navOptions("Logout", "log-out"), headerShown: false }} />
//         <Drawer.Screen name="86" component={ProductContainer} options={navOptions("My Reservations", "biscuit-clock")} />
//       </Drawer.Navigator>
//     )
//   }




const TabNav = observer(() => {
    const { ProcessStore: { ShippmentProcess, CheckoutProcess, PaymentProcess } } = useStore()
    //checkcircle
    return <TabNavigator.Navigator
    screenOptions={{tabBarScrollEnabled:true}}
    tabBarOptions={{
    
        
        activeBackgroundColor: '#de530eed',
        inactiveBackgroundColor: '#de530eed',
      
       
    }}
    
    

    >
        <TabNavigator.Screen name="Shippment" component={Shippment} options={{ ...navOptions('Admin', !ShippmentProcess ? 'closecircle' : 'checkcircle', !ShippmentProcess ? 'red' : 'green') }} />
        <TabNavigator.Screen name="Payment" component={Payment} options={{ ...navOptions('Admin', !PaymentProcess ? 'closecircle' : 'checkcircle', !PaymentProcess ? 'red' : 'green') }} />
        <TabNavigator.Screen name="Confirm" component={Confirm} options={{ ...navOptions('Admin', !CheckoutProcess ? 'closecircle' : 'checkcircle', !CheckoutProcess ? 'red' : 'green') }} />
{/*       
        <TabNavigator.Screen name="1" component={Shippment}  options={{ ...navOptions('Admin', !ShippmentProcess ? 'closecircle' : 'checkcircle', !ShippmentProcess ? 'red' : 'green') }}  />
        <TabNavigator.Screen name="2" component={Shippment}   options={{ ...navOptions('Admin', !ShippmentProcess ? 'closecircle' : 'checkcircle', !ShippmentProcess ? 'red' : 'green') }} />  
         
        <TabNavigator.Screen name="3" component={Shippment} options={{ ...navOptions('Admin', !ShippmentProcess ? 'closecircle' : 'checkcircle', !ShippmentProcess ? 'red' : 'green') }} />
        <TabNavigator.Screen name="4" component={Shippment} options={{ ...navOptions('Admin', !PaymentProcess ? 'closecircle' : 'checkcircle', !PaymentProcess ? 'red' : 'green') }} />  
         
        <TabNavigator.Screen name="5" component={Shippment} options={{ ...navOptions('Admin', !ShippmentProcess ? 'closecircle' : 'checkcircle', !ShippmentProcess ? 'red' : 'green') }} />
        <TabNavigator.Screen name="6" component={Shippment} options={{ ...navOptions('Admin', !PaymentProcess ? 'closecircle' : 'checkcircle', !PaymentProcess ? 'red' : 'green') }} />  

         
        <TabNavigator.Screen name="7" component={Shippment} options={{ ...navOptions('Admin', !ShippmentProcess ? 'closecircle' : 'checkcircle', !ShippmentProcess ? 'red' : 'green') }} />
        <TabNavigator.Screen name="8" component={Shippment} options={{ ...navOptions('Admin', !PaymentProcess ? 'closecircle' : 'checkcircle', !PaymentProcess ? 'red' : 'green') }} />   */}
       
    </TabNavigator.Navigator>
})







const TabTop = observer(() => {
    const { CartStore: { MyCart, count },userStore:{user} } = useStore()

    return <Tab.Navigator initialRouteName='Home' 
        screenOptions={{
         
        }}
        tabBarOptions={{
        scrollEnabled:true,
        activeTintColor: '#b30202',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#de530eed',
        inactiveBackgroundColor: '#de530eed'
   
    }}
    >
        <Tab.Screen name="Home" component={ProductContainer} options={{ ...navOptions('Admin', 'home'), headerShown: false, }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{ ...navOptions('Admin', 'shoppingcart'), headerShown: false, tabBarBadge: MyCart.length }} />
        {user.isAdmin ?
        <Tab.Screen name="Setting" component={AddminNavigation} options={{ ...navOptions('Admin', 'setting'), headerShown: false }} />
 : null}
        <Tab.Screen name="Profile" component={UserScreen} options={{ ...navOptions('Admin', 'user'), headerShown: false }} />



        {/* <Tab.Screen name="4" component={UserScreen} options={{ ...navOptions('Admin', 'user'), headerShown: false }} />

        <Tab.Screen name="5" component={UserScreen} options={{ ...navOptions('Admin', 'user'), headerShown: false }} />

        <Tab.Screen name="6" component={UserScreen} options={{ ...navOptions('Admin', 'user'), headerShown: false }} /> */}
    </Tab.Navigator>
})



function MainNavigator() {
    const { ProductStore: { selectedProduct } } = useStore()


    return (

        <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }} initialRouteName='Dashboard' >
            <Stack.Screen name="Dashboard" component={TabTop} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={GaneDetails} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
            <Stack.Screen name="Checkout" component={TabNav} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
            <Stack.Screen name="Rgister" component={RegisterScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />
            <Stack.Screen name="MyOrders" component={MyOrdersScreen} options={{ headerShown: false, ...navOptions('detail', '', selectedProduct.color) }} />


            {/* <Stack.Screen name="1" component={NavDrawer} options={{ headerShown: false,...navOptions('detail', '', selectedProduct.color) }} /> */}
          

      



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