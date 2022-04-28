
import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { View, Text, StyleSheet,FlatList} from 'react-native'
import { Button } from 'react-native-paper'
import { Product } from '../../Models/ProductModel'
import { Sharedtstyle } from '../Shared/SharedStyle'
import AdminCategoryWidget from './Widget/AdminCategoryWidget'
import  Toast  from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native'
import { useStore } from '../../store/store'
import { observer } from 'mobx-react-lite'


interface Props {
   
    setSwipeModal: any
    AddProductsetSwipeModal:any
    selectedProduct:Product
}

function AddCategoryForm({  setSwipeModal,AddProductsetSwipeModal }: Props) {
    const [selectedCategory, setselectedCategory] = useState("");
    const {ProductStore:{AddNewProduct,selectedProduct,file},ProcessStore:{uploading}} = useStore()
    const nav = useNavigation()
    
    const data = ["Beuty","Cars","Computer","Games","Homne","Mobile"]

    return (
        <View style={style.mainView}>
            <View style={style.backView}>
                <Button onPress={ ()=> setSwipeModal(false)}>Back</Button>
            </View>
            <View>
                <View style={Sharedtstyle.mainVwiew}>
                    <Text style={Sharedtstyle.title}>Select Category</Text>
                </View>
                <FlatList renderItem={(item)=><AdminCategoryWidget   setselectedCategory={setselectedCategory}
                selectedCategory={selectedCategory} dataItem={item.item}/>} data={data} />
                <Button style={style.finishBt} onPress={() => {
                    setSwipeModal(false)
                    AddProductsetSwipeModal(false)
              
                    AddNewProduct(selectedProduct,selectedProduct.file,uploading,nav,Toast).then(()=>{
                   
                    })
                 
                }}  >Finish</Button>
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    mainView: {
        marginTop: 100,
        padding:40,
       
    },
    backView:{

    },
    finishBt:{
        marginTop:20
    }
})


export default observer(AddCategoryForm)