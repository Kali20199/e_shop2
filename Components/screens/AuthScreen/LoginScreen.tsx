import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Button, Alert } from 'react-native';
import { Text as TEXT} from 'react-native-elements';
import {TextInput} from 'react-native-paper'
import { useStore } from '../../../store/store';
import { Sharedtstyle } from '../../Shared/SharedStyle';

const height = Dimensions.get('window').height

function LoginScreen() {

    const [showpassword, setShowPassword] = useState(true)
    const [foucus, setfoucus] = useState(false)
    const {userStore:{login,user}} = useStore()
    const nav = useNavigation()
    let Cred = {
        email: '',
        password: '',
    
      }  as any


    const handleInput = (event:any) => {
        const { nativeEvent } = event
        const Type = event._targetInst.memoizedProps.nativeID
        Cred[Type] = nativeEvent.text
    
      }
    //   setInterval(()=>{
    //     console.log("Screen is Foucused")
    //   },4)

      useFocusEffect(
        React.useCallback(() => {
            setTimeout(()=>{

                setfoucus(true)
                console.log("Screen is Foucus")
            },0)
          
          return () => {
            console.log("Screen is Un Foucus")
            setfoucus(false)
          };
        }, []))

//  useEffect(()=>{ 

//     return console.log("Un Mounted")
//  },[])


const handleSubmit=()=>{

    login(Cred.email,Cred.password,nav)
    
        
  
    // nav.navigate('Home' as any)
}
    

  return (
    <View style={style.mainView}>
        
{ foucus ?   <View style={style.wrapper}>
        <View>
            <Text style={Sharedtstyle.title}>Login</Text>
        </View>
            <View>
                <TextInput right={<TextInput.Icon name="email" />} keyboardType='email-address' onChange={handleInput} nativeID='email' placeholder={'Email'} style={Sharedtstyle.basicInput} />
            </View>
            <View>
                <TextInput right={<TextInput.Icon name="eye" onPress={()=>setShowPassword(!showpassword)}  />}  secureTextEntry={showpassword} onChange={handleInput} nativeID='password' placeholder={'Password'} style={Sharedtstyle.basicInput} />
            </View>


            <View style={style.submit}> 
                <Button  color={'#d76813'}  onPress={()=>handleSubmit()} title='Submit' ></Button>
                </View>

            <View> 
                <TEXT onPress={()=>{nav.navigate('Rgister' as any)}} style={style.signUpbt} >Sign Up</TEXT>
                </View>
            </View> : <Text>Not Foucs Yet</Text>}
        </View>
  )
}



const style = StyleSheet.create({

    mainView:{
      
    },
    wrapper:{
        marginTop:'50%',
        alignItems:'center',
        height:height
    },submit:{
        marginTop:15,
     
    },
    signUpbt:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:20,
        color:'#730868eb'
    }
})

export default  observer(LoginScreen)  