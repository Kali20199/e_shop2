
import { makeAutoObservable, reaction, runInAction } from 'mobx'
import agent from '../agent/agent'
import { Category } from '../Models/CategoryModel'
import { product } from '../Models/EmptyClasses'
import { Product } from '../Models/ProductModel'


export default class ProductStore {

    products = new Array<Product>()
    filterdProducts = new Array<Product>()
    selectedProduct = product



    constructor() {
        makeAutoObservable(this)

    }


    getProducts = async () => {

        runInAction(async () => {
            const product = await agent.product.products().then(res => {

                this.products = res.data
            })

        })

    }
    clearCategoryFilter = async () => {

        runInAction(async () => {
            this.filterdProducts = new Array<Product>()
        })

    }



    getProductByCategory = async (id: string) => {
        runInAction(async () => {
            await agent.product.getProductByCategory(id).then(res => {
                this.filterdProducts = res.data
            })
        })
    }

    SetselectedProduct = async (product: Product) => {

        runInAction(() => {
            this.selectedProduct = product
        })

    }

}