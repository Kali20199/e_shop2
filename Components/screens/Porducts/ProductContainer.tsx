import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text, Dimensions, ScrollView, Button, RefreshControl } from 'react-native'
import { IProduct, Product } from '../../../Models/ProductModel'
import { useStore } from '../../../store/store'
import ProductDetails from './ProductDetails'
import { SearchBar } from 'react-native-elements';
import { ListItem, Avatar } from '@rneui/themed'
import SearchedProducts from './SearchedProducts'
import PorductSwipper from '../../Widgets/PorductSwipper'
import CategoryWidget from '../../Widgets/CategoryWidget'
import { ActivityIndicator } from 'react-native-paper'
import { Sharedtstyle } from '../../Shared/SharedStyle'
import { onRefresh } from '../../Widgets/Refreshing'
const height = Dimensions.get('window').height
function ProductContainer() {
  const { userStore, ProductStore: { products,getProducts, filterdProducts, clearCategoryFilter }, CategoryStore: { categories } } = useStore()
  const [searched, setsearched] = useState('')
  const [filterdArr, setFilterd] = useState(products)
  const [onfocus, setOnfocus] = useState(false)
  const [firstElement, setfirstElement] = useState(true)
  const [refresh, setRefreshing] = useState(false)
  useEffect(() => {

    setFilterd(products)
  }, [products])



  const SearchingResult = ({ filterdArr }: any) => {

    return <View>
      {!onfocus ?
        <View>

          <ScrollView>
            <PorductSwipper product={products} />

            <FlatList style={style.list} horizontal
              renderItem={item => <CategoryWidget data={item.item} />} data={categories} />
            <FlatList style={style.list} numColumns={2}
              renderItem={item => <ProductDetails product={item} />} data={filterdProducts.length == 0 ? products : filterdProducts} />
            <View style={{ height: 160 }}></View>
          </ScrollView>

        </View>
        : filterdArr.map((e: any) =>
          <SearchedProducts product={e} />


        )

      }
    </View>

  }

  const updateSearchBar = (e: any) => {

    setsearched(e)
    if (e == '') {
      setOnfocus(false)
      setFilterd(products)

    } else {
      setOnfocus(true)
      const Filter = products.filter((item) => {
        if (item.name.toUpperCase().includes(e.toUpperCase())) {
          return item
        }
      })
      setFilterd(Filter)
    }
  }

 



  return (
    <View>

        <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => onRefresh(setRefreshing,getProducts)} />}>
          <SearchBar
            placeholder={"Type Here..." as any}
            onChangeText={updateSearchBar as any}
            value={searched} />

          {filterdArr.length == 0 ?

            <View style={style.notFound}>
              <Text style={style.textnotFound}>No Search Matching Cariteria</Text>
            </View> :
            <SearchingResult filterdArr={filterdArr} />
          }

        </ScrollView> 
   
   
      </View>
  )

}


const style = StyleSheet.create({

  list: {

    marginBottom: 30

  },
  notFound: {
    height: height / 1.4,
    marginLeft: '20%',

    alignContent: 'center',
    justifyContent: 'center',
  },
  textnotFound: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default observer(ProductContainer) 