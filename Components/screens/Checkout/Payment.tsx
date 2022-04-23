import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { View,TextInput, StyleSheet,Button,Text, FlatList } from 'react-native'
import { useStore } from '../../../store/store'
import { Sharedtstyle } from '../../Shared/SharedStyle'
import PaymentWidget from '../../Widgets/PaymentWidget'

function Payment() {
    const {ProcessStore,OrderStore:{MyOrder}} = useStore()
    const paymentMehod =  ['Cahsh on Deleviry','Bank Transfer','Visa Card','Master Card','Crpto Methods']
    const nav = useNavigation()
    let Payment = {
        Phone:'',
        ShippingAddress1:'',
        ShippingAddress2:'',
        City:'',
        ZipCode:''
    }

  useEffect(()=>{
  
  },[MyOrder.paymentMehod])  

  
  return (
    <View style={style.view}>
        <View>
            <Text style={Sharedtstyle.title}>Choose your Payment Method</Text>
            <FlatList renderItem={(item)=><PaymentWidget method={item.item}/>}  data={paymentMehod}/>
        </View>
      
    </View>
  )
}



const style = StyleSheet.create({
    view:{
    
        alignItems:'center' 
    }
})

export default observer(Payment) 