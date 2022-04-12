import React, { createContext, useContext } from 'react'
import { CategoryStore } from './CategoryStore'

import ProductStore from './ProductStore'
import User from './User'






export const store = ({
    ProductStore: new ProductStore(),
    CategoryStore:new CategoryStore(),
    userStore: new User()
})

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
} 