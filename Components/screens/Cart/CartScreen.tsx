import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, TouchableHighlight } from 'react-native'

import { useStore } from '../../../store/store'
import CartCard from '../../Widgets/CartCard'
import { SwipeListView } from 'react-native-swipe-list-view'
import Icons from 'react-native-vector-icons/AntDesign'
import { observer } from 'mobx-react-lite'
function CartScreen() {
    const { CartStore } = useStore()
    const re = CartStore.count

    return (
        <View>

            
            <SwipeListView renderItem={(item) =>
                <CartCard cartItem={item.item} />} data={CartStore.MyCart}
                renderHiddenItem={(item) => <View style={style.deletebt}>
                    <TouchableHighlight
                    style={{height:90}}
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
    }
})

export default observer(CartScreen)