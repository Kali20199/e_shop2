import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import ProductCards from '../../Widgets/ProductCards';
import { IProduct, Product } from './../../../Models/ProductModel';
import SearchedProducts from './SearchedProducts';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../../store/store';
function ProductDetails({ product, isFoucs }: any) {
  const navigation = useNavigation();
  const { CategoryStore: { getCategoryType } } = useStore()
  const Prod = product.item as IProduct
  return (

    <View>
    <TouchableOpacity onPress= {() => {
    getCategoryType(Prod.category)
    navigation.navigate("Detail")
  }
}>
  <View>
  <ProductCards product={ Prod } />

    < /View>
    < /TouchableOpacity>
    < /View>
  )
}


const styles = StyleSheet.create({

});


export default ProductDetails 