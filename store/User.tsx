
import { makeAutoObservable, reaction, runInAction } from 'mobx'
import { Alert } from 'react-native'
import agent from '../agent/agent'
import { Product } from '../Models/ProductModel'
import { UserModel,IUserModel} from '../Models/UserModel'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { shippemt, user } from '../Models/EmptyClasses'
import { IShippmentModel } from './../Models/ShippmentModel';
import Toast,{ErrorToast} from 'react-native-toast-message'
import { useStore } from './store'
import { store } from './store'

export const PERSISTENCE_KEY = 'UserToekn'
export const USERDATA = 'User'

export default class User {

    user =  user
    count=0


    
    constructor() {
        makeAutoObservable(this)

    }


    init_User=async()=>{

        runInAction(async()=>{
           let MyData =  await AsyncStorage.getItem(USERDATA)
           MyData = JSON.parse(MyData!) 
           if(MyData !==null && MyData!==undefined){
           this.user = (MyData) as any
        }
        })
    }


    login=async(email:string,pass:string,nav:any)=>{
       await AsyncStorage.getItem('UserToekn',(error)=>{})   
        runInAction(async()=>{ 
            const loginModel = { 
                email:email,
                password:pass 
            }

            await agent.Auth.login(loginModel).then(async res=>{
                const User = res.data 
                User['shippment'] = shippemt
               this.user = User
               await AsyncStorage.setItem(PERSISTENCE_KEY,res.data.token)
               await AsyncStorage.setItem(USERDATA,JSON.stringify(this.user))
               Toast.show({
                position:'top'   ,
                topOffset:60,
                type:'success',
                text1:'Login Successfully'
              })
              store.ProcessStore.authProcess()
              nav.navigate('Home' as any)
              
            }).catch((res)=>{
        
                Toast.show({
                    topOffset:60,
                    type:'error',
                    text1:'Login Failed try again'
                  })
            })
          
        })
    }   


    register=async(user:IUserModel)=>{

        runInAction(async()=>{

            await agent.Auth.register(user).then(async res=>{
                Alert.alert('User Created')
                
   
            })
        })
    } 

    addUserShippment=(shippmentInfo:IShippmentModel)=>{
        runInAction(()=>{
            this.user.shippment = shippmentInfo
            this.count++
        })
    }


    logout=()=>{
        runInAction(async()=>{
            this.user = user
            await AsyncStorage.clear()

            console.log("user Loged Out")
        })
    }

}