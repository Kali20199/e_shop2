
import { CartItemModel } from "./CartItemModel";
import { Category } from "./CategoryModel";
import { OrderModel } from "./OrderModel";
import { Product } from "./ProductModel";
import { ShippmentModel } from "./ShippmentModel";
import { UserModel } from "./UserModel";

export const category = new Category("", "", "", "")
export const product =  new Product("", "", "", "", "", [], "", 0, category, 0, 0, 0, false, Date.now())
export const shippemt = new ShippmentModel("","","","","","","")
export const order = new OrderModel("","","","",0,"","","","",false,new Array<CartItemModel>())
export const user = new UserModel("", "",shippemt,"",false)