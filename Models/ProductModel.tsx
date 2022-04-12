export interface IProduct {
    _id:string
    name: string
    description: string,
    richDescription: string,
    imageUrl: string,
    images: Array<string>
    brand: string,
    price: number,
    category: string,
    countInStock:number
    rating: number,
    numReviews: number,
    isFetueared: boolean,
    deteCreated: number

}


export class Product {
    _id=''
    name=''
    description=''
    richDescription=''
    imageUrl=''
    images=new Array
    brand=''
    price=0
    category=''
    countInStock=5
    rating=0
    numReview=0
    isFeaured=false
    dateCreated=Date.now()




    constructor(_id:string,name: string,description: string,richDescription: string,  imageUrl: string, images: Array<string>, brand: string, price: number,
        category: string,countInStock:number,  rating: number,  numReviews: number, isFetueared: boolean, dateCreated: number) {

    this._id=_id
    this.name=name,
    this.category=category,
    this.countInStock=countInStock
    this.dateCreated=dateCreated
    this.description=description,
    this.imageUrl=imageUrl,
    this.images=images,
    this.isFeaured=isFetueared
    this.numReview=numReviews,
    this.richDescription=richDescription
    this.rating=rating,
    this.price=price,
    this.brand=brand
    
    }
}