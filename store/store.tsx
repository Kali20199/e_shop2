import React, { createContext, useContext } from 'react'
import { CategoryStore } from './CategoryStore'

import ProductStore from './ProductStore'
import User from './User'
import { CartStore } from './CartStore';
import { ProcessStore } from './ProcessStore';
import { OrderStore } from './OrderStore';






export const store = ({
    ProductStore: new ProductStore(),
    CategoryStore: new CategoryStore(),
    ProcessStore:new ProcessStore(),
    CartStore: new CartStore(),
    userStore: new User(),
    OrderStore:new OrderStore()
})

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
} 