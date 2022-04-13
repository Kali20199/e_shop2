
import { makeAutoObservable, runInAction } from 'mobx';
import { CartItemModel } from '../Models/CartItemModel';
import { IProduct, Product } from './../Models/ProductModel';


export class CartStore {

    MyCart = new Array<CartItemModel>()
    count = 0

    constructor() {
        makeAutoObservable(this)
    }



    addtoCart = async (product: IProduct,qty:number,id:string) => {
        runInAction(() => {
            const Item = this.MyCart.find(item => item._id == product._id)
            if (!Item) {
                
                this.MyCart.push(new CartItemModel(qty,id,product))
            } else { 
                Item.qty+=1
                this.count++
                // this.MyCart.find(item => item._id == product._id)!.qty+=1
            }
        })
    }

    deleteCartItem = async (id: string) => { 
        runInAction(() => {
            const cart =  this.MyCart.filter(product => product._id !== id)
            this.MyCart = cart
        })
    }
    cleatCart = async () => {
        runInAction(() => {
            this.MyCart =  new Array<CartItemModel>()
        })
    }
}