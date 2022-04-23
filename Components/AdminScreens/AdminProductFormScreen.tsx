import { Button } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { Alert, BackHandler, StyleSheet, Text, TextInput, View } from 'react-native'
import { product } from '../../Models/EmptyClasses'
import { Product } from '../../Models/ProductModel'
import { useStore } from '../../store/store'
import { Sharedtstyle } from '../Shared/SharedStyle'
import AddCategoryForm from './AddCategoryForm'
import SwipapleModal from './Widget/SwipapleModal'

function AdminProductFormScreen({ title }: any) {
    const { ProductStore: { selectedProduct } } = useStore()
    const [swipeModal, setSwipeModal] = useState(false);
    var Product = product as any
    if (title == "Edit Product") {
         Product = selectedProduct as any
    }

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    const handleInput = (event: any) => {
        const { nativeEvent } = event
        const Type = event._targetInst.memoizedProps.nativeID
        Product[Type] = nativeEvent.text

    }
    //   


    return (
        <View style={style.mainView}>
            <View>
                <Text style={Sharedtstyle.title}> {title}</Text>
            </View>
            <View>
                <TextInput  onBlur={()=>{}}   onFocus={()=>{}}  defaultValue={Product.name} keyboardType='default' onChange={handleInput} nativeID='name' placeholder={'name'} style={Sharedtstyle.basicInput} />
            </View>

            <View>
                <TextInput  defaultValue={Product.brand} onChange={handleInput} nativeID='brand' placeholder={'brand'} style={Sharedtstyle.basicInput} />
            </View>

            <View>
                <TextInput defaultValue={Product.price.toString()}  onChange={handleInput} nativeID='Price' placeholder={'price'} style={Sharedtstyle.basicInput} />
            </View>

            <View>
                <TextInput defaultValue={Product.countInStock.toString()} onChange={handleInput} nativeID='countInStock' placeholder={'countInStock'} style={Sharedtstyle.basicInput} />
            </View>

            <View>
                <TextInput defaultValue={Product.description} onChange={handleInput} nativeID='description' placeholder={'description'} style={Sharedtstyle.basicInput} />
            </View>
            <Button onPress={()=>{
                setSwipeModal(true)
            }} title={"Next"}/>
            <SwipapleModal title={title} swipeModal={swipeModal} Element={()=><AddCategoryForm setSwipeModal={setSwipeModal} product={product}/>}  setSwipeModal={setSwipeModal}  />
        </View>
    )
}

const style = StyleSheet.create({
    mainView: {
        marginTop: 100,
        alignItems: 'center',

    },
})

export default AdminProductFormScreen