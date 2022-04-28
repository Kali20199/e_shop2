
import axios from 'axios'
import { makeAutoObservable, reaction, runInAction } from 'mobx'
import agent from '../agent/agent'
import { Category } from '../Models/CategoryModel'
import { product } from '../Models/EmptyClasses'
import { Product } from '../Models/ProductModel'


export default class ProductStore {

    products = new Array<Product>()
    filterdProducts = new Array<Product>()
    selectedProduct = product
    count =0 
    file:any;


    constructor() {
        makeAutoObservable(this)

    }

    AddNewProduct=async(product:Product,file:any,fun1?:any,fun2?:any,fun3?:any)=>{
        runInAction(async()=>{
            fun1(true)
            await agent.product.Add(product,file).then(res=>{

                fun1(false)
                fun2.navigate("Products"as any)  
                fun3.show({
                    
                    text1:'Product Added Succsseffully xxx'
                }) 

            })
          
        })
    }

    deleteProduct=(id:string)=>{
        runInAction(async()=>{
            await agent.product.delete(id).then(res=>{
                const prods =   this.products.filter(x=>x._id !== id)
                this.products = prods
                this.count++
            })
         
        })
    }

    getProducts = async () => {

        runInAction(async () => {
             await agent.product.products().then(res => {
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

    setSelectedProductCategory=(catname:string)=>{
        runInAction(()=>{
            this.selectedProduct.category.name = catname
        })
    }
    setFile=(file:any)=>{
        runInAction(()=>{
            this.selectedProduct.file = file
        })
    }
}