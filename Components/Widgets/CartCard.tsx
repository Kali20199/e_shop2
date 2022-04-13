import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { ICartItemModel } from '../../Models/CartItemModel';
import { useStore } from '../../store/store';


const width = Dimensions.get('window').width
function CartCard({ cartItem }: any) {
    const cart = cartItem as ICartItemModel
     const {CartStore:{MyCart,count}} = useStore()
  

    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={style.mainVeiw}>
                <View style={style.container}>
                    <Image
                        style={style.img}
                        source={{ uri: cart.product.imageUrl }} />
                    <View style={style.infoVeiw}>
                        <View style={style.info}>
                            <Text style={style.name}>{cart.product.name}</Text>
                            <Text style={style.description}>{cart.product.description}</Text>
                            <Text>{cart.product.price}$</Text>
                        </View>
                        <View >
                            <Text style={style.textqty}>Qty: {cart.qty}</Text>
                            <Text style={style.textqty}></Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({

    mainVeiw: {
      
        height: 90,
        backgroundColor: '#fffffffd',
        elevation: 5,
        padding: 10,
    },
    img: {
        height: 70,
        width: 80,
    },
    container: {
        flexDirection: 'row',


    },
    infoVeiw: {
        flexDirection: 'row',
        width:width/1.5,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        color: '#afafafe'
    },
    price: {},
    info: {
        marginLeft: 10,
        fontSize: 17,
    },
    textqty:{
        marginLeft: 10,
        fontSize: 16,
        color:'black'
    }
})

export default observer(CartCard)