
import axios, { AxiosResponse } from 'axios'
import { IUserModel } from '../Models/UserModel';
import { ICategory } from './../Models/CategoryModel';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PERSISTENCE_KEY } from '../store/User';
import { OrderModel } from '../Models/OrderModel';
import { Product } from '../Models/ProductModel';
import mime from 'mime'
import Form from 'form-data'
axios.defaults.baseURL = 'http:/192.168.1.30:5000/api'
const baseUrl = 'http:/192.168.1.30:5000/api'
// const config ={
    
//     headers:{    
//         "Content-Type":"multipart/form-data",
//         Authorization:`Bearer ${token}`


// }}
axios.interceptors.request.use(async (request) => {
    const token = await AsyncStorage.getItem('UserToekn', (error) => { })

    request.headers.Authorization = `Bearer  ${token}`

    return request
},
    (error: any) => {

        console.log(error)
    })



axios.interceptors.response.use(async (response: AxiosResponse) => {



    return response
},
    (responseError: any) => {

        console.log("Error in agent" +responseError)

        return responseError
    })


const Auth = {
    getAll: () => axios.get('/'),
    login: (loginModel: any) => axios.post('/Auth/login', loginModel),
    register: (user: IUserModel) => axios.post('Auth/register', user)
}

const Category = {
    getCategories: () => axios.get('/category/'),
    Add: (category: ICategory) => axios.post('/category/Add', category),
    Delete: (id: string) => axios.get(`/category/delete/${id}`),
    Update: (category: ICategory) => axios.post('/category/Update', category),
    getTypeCategory: (id: string) => axios.get(`/category/${id}`)
}

const product = {
    products: () => axios.get('/product/'),
    Add:async(product:Product,file:any)=> {
        let formData = new FormData();   
        let xhr =new XMLHttpRequest();
        xhr.open('POST', baseUrl + '/product/Add');
        formData.append('name',product.name)
        formData.append('countInStock',product.countInStock)
        formData.append('richDescription',product.richDescription)
        formData.append('price',product.price)
        formData.append('category',product.category)
        formData.append('color',product.color)
        formData.append('File', {...file, name: 'image.jpg', type: 'image/jpeg'});

     return xhr.send(formData)
       // return axios.post('/product/Add',formData,config)
    
    },

        
    getProductByCategory: (id: string) => axios.get(`/product/category/${id}`),

}

const order = {
    add:(order:OrderModel)=> axios.post('/Order/add',order),
    getMyOrders:()=>axios.get('/Order/myOrders')
}

const agent = {
    Auth,
    Category,
    product,
    order
}

export default agent

