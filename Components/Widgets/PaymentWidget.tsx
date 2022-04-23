import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View,Animated } from 'react-native'
import { Text } from 'react-native-elements'
import { useStore } from '../../store/store'
import Icon from 'react-native-vector-icons/Entypo'
import { Toast } from './../../node_modules/react-native-toast-message/lib/src/Toast';
import { useNavigation } from '@react-navigation/native'

function PaymentWidget(props:any) {
  const {OrderStore:{addPaymentMethod,MyOrder,count},ProcessStore} = useStore()
  const nav = useNavigation()
  useEffect(()=>{

  },[MyOrder.paymentMehod])

  return ( 
    <TouchableOpacity onPress={()=>{ 
      if(ProcessStore.ShippmentProcess) {
      addPaymentMethod(props.method)
      ProcessStore.setPaymentMethod()
      }else{
        Toast.show({ 
          type:'error',
          text1:'please Finsih Shippment Requirment First'
        })

        nav.navigate('Shippment' as any)
      }


    }}>
        <View style={style.mainView}> 
            <Text>{props.method}</Text> 
          {  MyOrder.paymentMehod == props.method ? 
          <Icon color={'green'} name='check' size={20}/> : 
          null}   

        </View>
    </TouchableOpacity>
  )
}  
 


const style = StyleSheet.create({
    mainView:{
        marginTop:30,
       height:50,
       backgroundColor:'#ffffffed',
       elevation:5,
       padding:15,
       flexDirection:'row',
       justifyContent:'space-between'
       
    }
})

export default  observer(PaymentWidget)  