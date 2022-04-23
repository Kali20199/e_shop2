export interface IShippmentModel {
    email: string
    street: string
    zip: string
    phone: string
    city: string
    ShippmentAddress1: string
    ShippmentAddress2: string

}
export class ShippmentModel {
    email = ``
    street = ``
    zip = ``
    phone = ``
    city = ``
    ShippmentAddress1 = ``
    ShippmentAddress2 = ``

    constructor(
        email: string,
        street: string, zip: string, phone: string, city: string, ShippmentAddress1: string,
        ShippmentAddress2: string,) {
        this.email = email
        this.street = street
        this.zip = zip
        this.phone = phone
        this.city = city
        this.ShippmentAddress1 = ShippmentAddress1
        this.ShippmentAddress2 = ShippmentAddress2

    }
}
