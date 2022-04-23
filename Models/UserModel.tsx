import { shippemt } from "./EmptyClasses"
import { IShippmentModel } from "./ShippmentModel"

export interface IUserModel {
name:string
email:string
image:string
shippment:IShippmentModel
isAdmin:boolean

}  
export class  UserModel {
name= `` 
email= `` 
image= `` 
isAdmin=false
shippment=shippemt

constructor(
name:  string,
email:  string,shippment:IShippmentModel,image:  string,isAdmin:  boolean){
this.name=name
this.email=email
this.image=image
this.isAdmin=isAdmin
this.shippment = shippment

}
}
 