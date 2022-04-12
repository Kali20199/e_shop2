import { color } from '@rneui/base'
import React from 'react'
import { View,Text,StyleSheet ,Image, TouchableOpacity} from 'react-native'
import { IProduct } from '../../../Models/ProductModel'

function SearchedProducts(product:any) {

    const prod = product.product as IProduct
  return (
    <TouchableOpacity onPress={()=>{}}>
        <View style={style.mainVeiw}>
            <View style={style.container}>
                <Image
                style={style.img}
                source={{uri:prod.imageUrl}}/>
                <View style={style.info}>
                    <Text style={style.name}>{prod.name}</Text>
                    <Text style={style.description}>{prod.description}$</Text>
                    <Text>{prod.price}$</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}  



const style = StyleSheet.create({

    mainVeiw:{
        height:90,
        backgroundColor:'#fffffffd',
        elevation:5,
        padding:10,
    },
    img:{
        height:70,
        width:80,
    },
    container:{
     flexDirection:'row',
     
    },
    name:{
        fontSize:17,
        fontWeight:'bold',
        color:'black'
    },
    description:{
        color:'#afafafe'
    },
    price:{},
    info:{
        marginLeft:10,
        fontSize:17,
    }
})

export default SearchedProducts