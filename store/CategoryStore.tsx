import { makeAutoObservable, reaction, runInAction } from 'mobx'
import { Category } from '../Models/CategoryModel'
import agent from './../agent/agent';
import { Alert } from 'react-native';

export class CategoryStore {

    categories = new Array<Category>()
    selectedGameCategory = new Category("", "", "", "")


    constructor() {
        makeAutoObservable(this)

    }

    getCatgories = async () => {

        runInAction(async () => {
            await agent.Category.getCategories().then(res => {
                this.categories = res.data
            })

        })
    }


    // getCategoryType = async (id: string) => {

    //     runInAction(async () => {
    //         const selected = await agent.Category.getTypeCategory(id).then(res => {
    //             this.selectedGameCategory = res.data
    //             Alert.alert(this.selectedGameCategory.color)
    //         }).catch(err => {
    //             Alert.alert("Error")
    //         })
    //     })
    // }



}