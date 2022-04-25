import { Category, ICategory } from './CategoryModel';
export interface IProduct {

    _id: string
    name: string
    description: string,
    richDescription: string,
    imageUrl: string,
    images: Array<string>
    brand: string,
    price: number,
    category: Category,
    countInStock: number
    rating: number,
    numReviews: number,
    isFetueared: boolean,
    deteCreated: number,
    color: string,
    file: any

}


export class Product {
    _id = ''
    name = ''
    description = ''
    richDescription = ''
    imageUrl = ''
    images = new Array
    brand = ''
    price = 0
    category = new Category("", "", "", "")
    countInStock = 5
    rating = 0
    numReviews = 0
    isFetueared = false
    deteCreated = Date.now()
    color = ''
    file = ''




    constructor(_id: string, name: string, description: string, richDescription: string, imageUrl: string, images: Array<string>, brand: string, price: number,
        category: Category, countInStock: number, rating: number, numReviews: number, isFetueared: boolean, dateCreated: number, color = '#3333cc', file?: any) {

        this._id = _id
        this.name = name,
            this.category = category,
            this.countInStock = countInStock
        this.deteCreated = dateCreated
        this.description = description,
            this.imageUrl = imageUrl,
            this.images = images,
            this.isFetueared = isFetueared
        this.numReviews = numReviews,
            this.richDescription = richDescription
        this.rating = rating,
            this.price = price,
            this.brand = brand
        this.color = color
        this.file = file

    }
}