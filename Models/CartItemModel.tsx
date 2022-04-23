import { product } from "./EmptyClasses"
import { IProduct } from "./ProductModel"

export interface ICartItemModel {
    qty: number
    _id: string
    product: IProduct
    imageUrl:string
    price:number
    name:string

}
export class CartItemModel {
    qty = 1
    _id = ``
    product = product
    imageUrl=''
    price = 0
    name =''

    constructor(qty: number,
        _id: string, product: IProduct,imageUrl:string,price:number,name:string) {
        this.qty = qty
        this._id = _id
        this.product = product
        this.imageUrl = imageUrl
        this.price = price
        this.name = name


    }
}
