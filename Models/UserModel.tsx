export interface IUserModel {
name:string
email:string
image:string
street:string
city:string
zip:string
phone:string
isAdmin:boolean

}  
export class  UserModel {
name= `` 
email= `` 
image= `` 
street= `` 
city= `` 
zip= `` 
phone= `` 
isAdmin=false

constructor(
name:  string,
email:  string,image:  string,street:  string,city:  string,zip:  string,
phone:  string,isAdmin:  boolean,){this.name=name
this.email=email
this.image=image
this.street=street
this.city=city
this.zip=zip
this.phone=phone
this.isAdmin=isAdmin

}
}
 