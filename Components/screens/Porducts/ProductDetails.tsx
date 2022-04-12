import React from 'react'
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native'
import ProductCards from '../../Widgets/ProductCards';
import { IProduct,Product } from './../../../Models/ProductModel';
import SearchedProducts from './SearchedProducts';

function ProductDetails({product,isFoucs}:any) {
  const Prod = product.item as IProduct
  return (
    
    <View>
        <TouchableOpacity>
            <View>
               <ProductCards product={Prod}/>   
    
            </View>
        </TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
 
  });
  

export default ProductDetails 