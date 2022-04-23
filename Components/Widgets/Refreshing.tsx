import React from "react";
import { View } from "react-native";



export const  onRefresh=async(setRefreshing:any,Asyncfun:any)=>{

    setRefreshing(true);
    await Asyncfun()
    setRefreshing(false) 


    return <View></View>

}


 