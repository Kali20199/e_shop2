import { makeAutoObservable, reaction, runInAction } from 'mobx'
import { Category } from '../Models/CategoryModel'
import agent from './../agent/agent';

export class CategoryStore {

    categories = new Array<Category>()

    getCatgories = async () => {

        runInAction(async () => {
            await agent.Category.getCategories().then(res => {
                this.categories = res.data
            })

        })
    }


    constructor() {
        makeAutoObservable(this)

    }
}