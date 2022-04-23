import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, TouchableHighlight, Dimensions } from 'react-native'
import { useStore } from '../../../store/store'
import CartCard from '../../Widgets/CartCard'
import { SwipeListView } from 'react-native-swipe-list-view'
import Icons from 'react-native-vector-icons/AntDesign'
import { observer } from 'mobx-react-lite'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { OrderModel } from '../../../Models/OrderModel'


const height = Dimensions.get('window').height
function CartScreen() {
    const nav = useNavigation()
    const { CartStore,OrderStore } = useStore()
    const re = CartStore.count

    return (
        <View>


            <SwipeListView renderItem={(item) =>
                <CartCard cartItem={item.item} />} data={CartStore.MyCart}
                renderHiddenItem={(item) => <View style={style.deletebt}>
                    <TouchableHighlight
                        style={{ height: 90 }}
                        onPress={() => CartStore.deleteCartItem(item.item._id)}
                        underlayColor={'#AAA'} >
                        <View style={style.trash}>
                            <Icons name='delete' color={'white'} size={40} />
                        </View>
                    </TouchableHighlight>
                </View>}
                leftOpenValue={0}
                rightOpenValue={-150}
  
            />

            <View style={style.actionView}>
                {CartStore.MyCart.length !==0 ?
                <View style={style.btns}>
                    <View style={style.ConfirmView}><Button onPress={() => {
                       OrderStore.addCartItems(CartStore.MyCart)
                        nav.navigate("Checkout" as any)
                    }} title={'Confirm'} /></View>
                    <Button onPress={() => {

                    }} title={'Clear'} />
                </View>  : 
                
                <View style={style.emptyCartView}>
                    <Text style={style.emptyCartText}>
                        Your Cart is Empty
                    </Text>
                </View>
                }
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    deletebt: {
        backgroundColor: 'red',
        height: 90,
    },
    trash: {
        paddingTop: 15,
        paddingRight: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    actionView: {
        justifyContent: 'flex-end',
        marginTop: 40
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 10
    },
    ConfirmView: {
        marginRight: 10
    },
    emptyCartView:{
        justifyContent:'center',
        alignItems:'center',
    },
    emptyCartText:{
        fontSize:19,
        fontWeight:'700',
    }
})

export default observer(CartScreen)