import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert,  } from 'react-native';
import {TextInput} from 'react-native-paper'
import { Sharedtstyle } from '../../Shared/SharedStyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from 'react-native-elements';
import { useStore } from '../../../store/store';
import { shippemt } from '../../../Models/EmptyClasses';
import { UserModel } from '../../../Models/UserModel';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constant/Colors';


const height = Dimensions.get('window').height
function RegisterScreen() {
    const {userStore:{register}} = useStore()
    const nav = useNavigation()
    const [showpassword, setShowPassword] = useState(true)

    var Cred = {
        userName:'',
        email: '',
        password: '',
        ConfirmPassword:'',

    
      } as any


    const handleInput = (event:any) => {
        const { nativeEvent } = event
        const Type = event._targetInst.memoizedProps.nativeID
        Cred[Type] = nativeEvent.text
    
      }
    
      const handelSubmit = ()=>{
           const {password,ConfirmPassword,email,userName} = Cred
         
           if(email=='' || !email.includes('@') || !email.includes('.com')){
               Alert.alert("Please Write Valid Email")
           }
           
        if(password == ConfirmPassword && (password !== '')){
            // submit
            const user = new UserModel(userName,email,shippemt,"",false)
            register(user)
            
        }else{
            Alert.alert("Make Sure Password Match")
        }

      }

  return (
    <View style={style.mainView}>
    <View style={style.wrapper}>
        <View>
            <Text style={Sharedtstyle.title}>Sign Up</Text>
        </View>
            <View>
                <TextInput right={<TextInput.Icon name="email" />} keyboardType='email-address' onChange={handleInput} nativeID='email' placeholder={'Email'} style={Sharedtstyle.basicInput} />
            </View>
            <View>
            <TextInput right={<Icon style={{color:'black'}} size={20} name="person"/> } keyboardType='email-address' onChange={handleInput} nativeID='userNmae' placeholder={'userNmae'} style={Sharedtstyle.basicInput} />
            </View>

 
            <View>
                <TextInput right={<TextInput.Icon name="eye" onPress={()=>setShowPassword(!showpassword)}  />}  secureTextEntry={showpassword} onChange={handleInput} nativeID='password' placeholder={'password'} style={Sharedtstyle.basicInput} />
            </View>

            <View>
                <TextInput right={<TextInput.Icon name="eye" onPress={()=>setShowPassword(!showpassword)}  />}  secureTextEntry={showpassword} onChange={handleInput} nativeID='ConfirmPassword' placeholder={'ConfirmPassword'} style={Sharedtstyle.basicInput} />
            </View>

           <View style={style.submit}>
               <Button title={'Register'}  onPress={()=>handelSubmit()} />
           </View>


           <View style={style.submit}>
               <Text style={style.register}   onPress={()=>nav.goBack()} >Already Has Account</Text>
           </View>
    </View>
    </View>
  )
}

const style = StyleSheet.create({

    mainView:{
      
    },
    wrapper:{
        marginTop:'20%',
        alignItems:'center',
        height:height
    },
    submit:{
        marginTop:30,
    },
    register:{
        fontWeight:'bold',
        color:Colors.Orange,
        fontSize:18,
        borderBottomEndRadius:1,
        borderColor:'red',
        borderBottomWidth:0.8,
    }
})



export default RegisterScreen