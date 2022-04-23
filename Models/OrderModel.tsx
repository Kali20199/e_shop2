import { CartItemModel, ICartItemModel } from './CartItemModel';

export interface IOrderModel {

    zip: string
    country: string
    phone: string
    status: string
    totalPrice: number
    city: string
    user: string
    dateOrderd: string
    paymentMehod: string
    isPaid: boolean
    OrderItems: ICartItemModel[]

}
export class OrderModel {
    zip = ``
    country = ``
    phone = ``
    status = ``
    totalPrice = 0
    city = ``
    user = ``
    dateOrderd = ``
    paymentMehod = ``
    isPaid = false
    OrderItems = new Array<CartItemModel>()

    constructor(
        zip: string,
        country: string, phone: string, status: string, totalPrice: number, city: string,
        user: string, dateOrderd: string, paymentMehod: string, isPaid: boolean, OrderItems: ICartItemModel[],
    ) {
        this.zip = zip
        this.country = country
        this.phone = phone
        this.status = status
        this.totalPrice = totalPrice
        this.city = city
        this.user = user
        this.dateOrderd = dateOrderd
        this.paymentMehod = paymentMehod
        this.isPaid = isPaid
        this.OrderItems = OrderItems

    }
}
