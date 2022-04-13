import { product } from "./EmptyClasses"
import { IProduct } from "./ProductModel"

export interface ICartItemModel {
    qty: number
    _id: string
    product: IProduct

}
export class CartItemModel {
    qty = 1
    _id = ``
    product = product

    constructor(qty: number,
        _id: string, product: IProduct,) {
        this.qty = qty
        this._id = _id
        this.product = product

    }
}
