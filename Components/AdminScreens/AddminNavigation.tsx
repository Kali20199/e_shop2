import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'

import AdmonProductFormScreem from './AdmonProductFormScreem'
const Stack = createNativeStackNavigator()
function AddminNavigation() {

    useEffect(()=>{

    },[])


    return (
        <Stack.Navigator initialRouteName='Products'>
             <Stack.Screen name="Products" component={AdmonProductFormScreem} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default  observer(AddminNavigation)