
import axios, { AxiosResponse } from 'axios'
import { IUserModel } from '../Models/UserModel';
import { ICategory } from './../Models/CategoryModel';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PERSISTENCE_KEY } from '../store/User';


axios.defaults.baseURL = 'http:/192.168.1.30:5000/api'
axios.interceptors.request.use(async (request) => {
    const token = await AsyncStorage.getItem('UserToekn', (error) => { })

    request.headers!.Authorization = `Bearer  ${token}`

    return request
},
    (error: any) => {

        console.log(error)
    })



axios.interceptors.response.use(async (response: AxiosResponse) => {



    return response
},
    (responseError: any) => {

        console.log(responseError)
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
    getProductByCategory: (id: string) => axios.get(`/product/category/${id}`),

}

const agent = {
    Auth,
    Category,
    product
}

export default agent

