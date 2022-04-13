import React, { createContext, useContext } from 'react'
import { CategoryStore } from './CategoryStore'

import ProductStore from './ProductStore'
import User from './User'
import { CartStore } from './CartStore';






export const store = ({
    ProductStore: new ProductStore(),
    CategoryStore: new CategoryStore(),
    CartStore: new CartStore(),
    userStore: new User()
})

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
} 