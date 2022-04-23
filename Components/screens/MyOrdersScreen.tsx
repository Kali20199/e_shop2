import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { CartItemModel } from '../../Models/CartItemModel';
import { OrderModel } from '../../Models/OrderModel';
import { useStore } from '../../store/store';
import { Sharedtstyle } from '../Shared/SharedStyle'
import { onRefresh } from '../Widgets/Refreshing';
function MyOrdersScreen() {
    const { OrderStore: { getmyLastOrders, myOrderHistory } } = useStore()
    const [refresh, setRefreshing] = useState(false)
    useEffect(() => {
        getmyLastOrders()
    }, [])






    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => onRefresh(setRefreshing, getmyLastOrders)} />} style={style.mainView}>
            {myOrderHistory.length !== 0 ?
                <View style={style.ordersMainView}>
                    <Text style={Sharedtstyle.title}>History orders</Text>

                    <View>
                        {myOrderHistory.map((order) =>
                            <TouchableOpacity>
                                <View style={style.order}>
                                    <Text style={style.orderhistory}>{new Date(Number(order.dateOrderd)).toString().split('G')[0]} </Text>
                                </View>
                            </TouchableOpacity>
                        )}

                    </View>

                </View>

                : null}
        </ScrollView>
    )
}




const style = StyleSheet.create({

    mainView: {
        padding: 40,

    },
    ordersMainView: {

    },
    order: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffffece',
        elevation:5
    },
    orderhistory:{
        color:'grey',
    }
})

export default observer(MyOrdersScreen) 