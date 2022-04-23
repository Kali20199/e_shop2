interface IOrderProcesses {
    ShippmentProcess: boolean
    CheckoutProcess: boolean
    PaymentProcess: boolean

}
export class OrderProcesses {
    ShippmentProcess = false
    CheckoutProcess = false
    PaymentProcess = false

    constructor(
        ShippmentProcess: boolean,
        CheckoutProcess: boolean, PaymentProcess: boolean,) {
            this.ShippmentProcess = ShippmentProcess
        this.CheckoutProcess = CheckoutProcess
        this.PaymentProcess = PaymentProcess

    }
}
