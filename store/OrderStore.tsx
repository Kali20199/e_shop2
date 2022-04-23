import { makeAutoObservable, runInAction } from 'mobx';
import { ToastAndroid } from 'react-native';
import agent from '../agent/agent';
import { CartItemModel } from '../Models/CartItemModel';
import { order } from '../Models/EmptyClasses';
import { OrderModel } from '../Models/OrderModel';
import { IOrderModel } from './../Models/OrderModel';
import { IShippmentModel } from './../Models/ShippmentModel';
import { store } from './store';


export class OrderStore {

    MyOrder = order
    count = 0
    myOrderHistory = new Array<OrderModel>()
    constructor() {
        makeAutoObservable(this)
    }


    addOrder = async (order: OrderModel) => {
        runInAction(async () => {
            await agent.order.add(order).then(res => {
                ToastAndroid.show("Order Made", ToastAndroid.SHORT)
            }).catch(err => {
                ToastAndroid.show("Order Failed Check Shippment Info and try again", ToastAndroid.SHORT)
            })
        })
    }


    addPaymentMethod = (method: string) => {
        runInAction(() => {
            this.MyOrder.paymentMehod = method
            this.count++
        })
    }

    addShippment = (shippment: IShippmentModel) => {
        runInAction(() => {
            this.MyOrder.city = shippment.city
            this.MyOrder.zip = shippment.zip
            this.MyOrder.phone = shippment.phone


        })
    }

    addCartItems = (cartItems: CartItemModel[]) => {
        runInAction(() => {
            this.MyOrder.OrderItems = cartItems
            this.count++
        })
    }

    getmyLastOrders = () => {
        runInAction(async()=>{
            await agent.order.getMyOrders().then(res=>{
                if(res.data!==undefined){
                this.myOrderHistory = res.data
                }
            })
        })

    }

}