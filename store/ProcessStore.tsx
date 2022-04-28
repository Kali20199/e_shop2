
import { makeAutoObservable, runInAction } from 'mobx';

export class ProcessStore{
    AuthProcess=false
    ShippmentProcess = false
    CheckoutProcess = false
    PaymentProcess = false
    uploadingProcess=false

    constructor(){
        makeAutoObservable(this)
    }


    shipped=()=>{
        runInAction(()=>{
            this.ShippmentProcess =true
        })
    }

    checkedOut=()=>{
        runInAction(()=>{
            this.CheckoutProcess =true
        })
    }


    setPaymentMethod=()=>{
        runInAction(()=>{
            this.PaymentProcess =true
        })
    }

    authProcess=()=>{
        runInAction(()=>{
            this.AuthProcess=true
        })
    }

    unAuthProcess=()=>{
        runInAction(()=>{
            this.AuthProcess = false
        })
    }
    uploading=(status:boolean)=>{
        runInAction(()=>{
            this.uploadingProcess = status 
        })
    }
  
}