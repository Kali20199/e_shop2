export interface ICategory {
    _id:string
    name:string,
    icon:string,
    color:string

}



export class Category {
    _id=''
    name=''
    icon=''
    color=''


    constructor(name:string,icon:string,color:string,_id:string)
    {   this._id=_id,
        this.color = color,
        this.icon = icon
        this.name = name
    }

}