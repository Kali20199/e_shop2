import React from 'react'
import { View, Text ,Image, StyleSheet } from 'react-native'

import { Product } from '../../Models/ProductModel'

function ConfirmItemWidget({ item }: any) {
    const product = item.product as Product
    return (
        <View style={style.container}>
            <Image style={style.img} source={{uri:product.imageUrl}}/>
            <View style={style.leftSide}>
                <Text>
                {product.name}
                </Text>
                <Text>
                ${product.price}
                </Text>
            </View>
        </View>
    )
}

export default ConfirmItemWidget

export const style = StyleSheet.create({


container:{
    flexDirection:'row',
    padding:10,
    elevation:5,
    justifyContent:'space-between',
    backgroundColor:'#d1cbcbed'
},


 img:{
     height:50,
     width:50
 },
 leftSide:{
     justifyContent:'flex-start',
     alignItems:'flex-start',
    
     
 }
    
})

