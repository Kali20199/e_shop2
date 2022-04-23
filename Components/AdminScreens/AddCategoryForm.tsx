
import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Product } from '../../Models/ProductModel'


interface Props{
    product:Product
    setSwipeModal:any
}

function AddCategoryForm({product,setSwipeModal}:Props) {
  return (
    <View style={style.mainView}>
        <Text>Category</Text>
        <View>
            <Button onPress={()=>{
                    setSwipeModal(false)
                }} title={"Finish"}/>
        </View>
    </View>
  )
}



const style = StyleSheet.create({
    mainView: {
        marginTop: 100,
        alignItems: 'center',

    },
})


export default AddCategoryForm