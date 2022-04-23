import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { StyleSheet, Text, View ,Image, Alert,TouchableHighlight} from 'react-native'
import { IProduct, Product } from '../../../Models/ProductModel'
import { Sharedtstyle } from '../../Shared/SharedStyle'
import Modal from '../../Shared/Modal'

function AdminProductItem({product,index,setShow,SetselectedProduct,setTitle}: any) {
    const Product = product as IProduct
    
    
    return (
        <TouchableHighlight onPress={()=>{
            setShow(true)
            SetselectedProduct(product)
        }}>
         
            <View>
          
                <View style={{...style.itemView,backgroundColor: index%2==0? '#b9b6b6eb' : '#ffffffebe',}}>
                
                <Image style={style.img} source={{uri:Product.imageUrl}}/>
                                   <Text style={Sharedtstyle.normaltxt}>{Product.name}</Text>
                    <Text style={Sharedtstyle.normaltxt}>{Product.category.name}</Text>
                    <Text style={Sharedtstyle.normaltxt}>{Product.price}$</Text>
                
                </View>
            </View>
            
            </TouchableHighlight>
    )
}



const style = StyleSheet.create({

    itemView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:50,
        padding:10,

    },
    img:{

      height:40,
      width:40,
    }

  })
  

export default observer(AdminProductItem)