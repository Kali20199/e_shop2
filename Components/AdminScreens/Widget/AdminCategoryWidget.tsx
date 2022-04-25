import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Text } from 'react-native-elements'
import { Product } from '../../../Models/ProductModel'
import { useStore } from '../../../store/store'
import { observer } from 'mobx-react-lite'


interface Props{
  setselectedCategory:any,
  selectedCategory:String,
  dataItem:string,
  
 
}

function AdminCategoryWidget({dataItem,setselectedCategory,selectedCategory}:Props) {
    const nav = useNavigation()
    const {ProductStore:{setSelectedProductCategory,AddNewProduct,selectedProduct}} =useStore()
  return (
    <TouchableOpacity onPress={()=>{
      setselectedCategory(dataItem)
   
      setSelectedProductCategory(dataItem)
    }}>
      <View style={style.mainView}>
      <Text>{dataItem}</Text> 
        {  selectedCategory == dataItem ? 
        <Icon color={'green'} name='check' size={20}/> : 
        null}   
      
      </View>
    </TouchableOpacity>
  )
} 


const style = StyleSheet.create({
    mainView:{

       
       height:50,
       backgroundColor:'#ffffffeb',
       elevation:5,
       padding:15,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'flex-start'
       
    }
})



export default observer(AdminCategoryWidget)