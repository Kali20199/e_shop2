import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import ProductCards from '../../Widgets/ProductCards';
import { IProduct, Product } from '../../../Models/ProductModel';
import SearchedProducts from './SearchedProducts';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '../../../store/store';
function ProductDetails({ product, isFoucs }) {
  const navigation = useNavigation();
  const { ProductStore: { SetselectedProduct } } = useStore()
  const Prod = product.item
  return (

    <View>
      <TouchableOpacity onPress={() => {
        SetselectedProduct(Prod)
        navigation.navigate("Detail")


      }
      }>
        <View>
          <ProductCards product={Prod} />

        </View>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({

});


export default ProductDetails 