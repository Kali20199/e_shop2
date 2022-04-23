import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { Alert } from 'native-base'
import React from 'react'
import { View,TextInput, StyleSheet,Button,Text } from 'react-native'
import Toast from 'react-native-toast-message'
import { useStore } from '../../../store/store'
import { Sharedtstyle } from '../../Shared/SharedStyle'

function Shippment() {
    //,
    const {ProcessStore:{shipped,AuthProcess},userStore:{addUserShippment,user},OrderStore:{addShippment}} = useStore()
    const nav = useNavigation()
    let ShippmentInfo = {
        email:user.email,
        phone:'',
        ShippmentAddress1:'',
        ShippmentAddress2:'',
        city:'',
        zip:''
    } as  any

    const handleChange=(event:any)=>{
        const {nativeEvent} = event
        const Type = event._targetInst.memoizedProps.nativeID
       ShippmentInfo[Type]  = nativeEvent.text 
    }

    const handleSubmit=()=>{
        if(AuthProcess) {
         addUserShippment(ShippmentInfo)
         addShippment(ShippmentInfo)
        shipped()
        nav.navigate('Payment' as any)
        }else{
           
            Toast.show({
                type:'error',
                text1:'you must Login first'
            })
            nav.navigate('Login' as any)
        
        }
    }

  return (
    <View style={style.view}>
        <View>
            <Text style={Sharedtstyle.title}>Shipping Address</Text>
        </View>
        <TextInput  onChange={handleChange} nativeID='phone'  placeholder='Phone' style={Sharedtstyle.basicInput}/>
        <TextInput onChange={handleChange} nativeID='ShippmentAddress1' placeholder='ShippingAddress 1' style={Sharedtstyle.basicInput}/>
        <TextInput onChange={handleChange} nativeID='ShippmentAddress2' placeholder='ShippingAddress 2' style={Sharedtstyle.basicInput}/>
        <TextInput onChange={handleChange} nativeID='city' placeholder='City' style={Sharedtstyle.basicInput}/>
        <TextInput onChange={handleChange} nativeID='zip' placeholder='ZipCode' style={Sharedtstyle.basicInput}/>
        <View  style={Sharedtstyle.netxtbt}><Button onPress={handleSubmit} title='next'/></View>
    </View>
  )
}



const style = StyleSheet.create({
    view:{
    
        alignItems:'center'
    }
})

export default observer(Shippment)