
import { makeAutoObservable, reaction, runInAction } from 'mobx'
import { Alert } from 'react-native'
import agent from '../agent/agent'
import { Product } from '../Models/ProductModel'
import { UserModel,IUserModel} from '../Models/UserModel'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const PERSISTENCE_KEY = 'UserToekn'

export default class User {

    user =  UserModel


    
    constructor() {
        makeAutoObservable(this)

    }


    login=async(email:string,pass:string)=>{
        const t= await AsyncStorage.getItem('UserToekn',(error)=>{})   
        runInAction(async()=>{ 
            const loginModel = { 
                email:email,
                password:pass 
            }

            await agent.Auth.login(loginModel).then(async res=>{
                let token = res.data.token
               await AsyncStorage.setItem(PERSISTENCE_KEY,res.data.token)
               this.user = res.data
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




}