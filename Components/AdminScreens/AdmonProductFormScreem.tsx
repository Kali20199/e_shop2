import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, RefreshControl, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { useStore } from '../../store/store'
import AdminProductItem from './Widget/AdminProductItem'
import { ActivityIndicator, Searchbar } from 'react-native-paper'
import { Sharedtstyle } from '../Shared/SharedStyle'
import Modal from '../Shared/Modal'
import { observer } from 'mobx-react-lite'
import { Button } from 'react-native-elements'
import Icons from 'react-native-vector-icons/Ionicons'
import Icons2 from 'react-native-vector-icons/Fontisto'
import SwipapleModal from './Widget/SwipapleModal'
import AdminProductFormScreen from './AdminProductFormScreen'
import { product } from '../../Models/EmptyClasses'
import { onRefresh } from '../Widgets/Refreshing';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function AdmonProductFormScreem() {

  const { ProductStore: { products, selectedProduct, SetselectedProduct, getProducts, count }, ProcessStore: { uploadingProcess } } = useStore()
  const [swipeModal, setSwipeModal] = useState(false);
  const [searched, setsearched] = useState('')
  const [filterd, setFilterd] = useState(products)
  const [onfocus, setOnfocus] = useState(false)
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('Add Prodct')
  const [refresh, setRefreshing] = useState(false)







    // handle Searching
  const handleSearching = (value: any) => {
    setsearched(value)
    if (value == '') {
      setOnfocus(false)
      setFilterd(products)

    } else {
      setOnfocus(true)
      const Filter = products.filter((item) => {
        if (item.name.toUpperCase().includes(value.toUpperCase())) {
          return item
        }
      })
      setFilterd(Filter)
    }
  }




  useEffect(() => {
    SetselectedProduct(product)

  }, [count]);







  return (
    <ScrollView style={style.mainView} refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => onRefresh(setRefreshing, getProducts)} />}  >
      {/* {uploadingProcess ?
        <View style={style.activity_IndcatorView}>
          <View>
            <ActivityIndicator />
            <Text>Uploading .... {count}</Text>
          </View>
        </View> : null} */}
      <View >
        <View style={style.actionViews}>
          <TouchableHighlight onPress={() => {
            setTitle("Add Product")
            setSwipeModal(!swipeModal)
          }}>
            <View style={style.addView}>
              <Icons color='white' size={20} name='add' />
              <Text style={style.bttxt}>Add Item {count}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {

          }}>
            <View style={style.Orders}>
              <Icons2 color={'white'} style={style.icons} size={20} name='shopping-bag' />
              <Text style={style.bttxt}> Orders</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Searchbar placeholder='Search' style={style.searchBar} value={searched} onChangeText={handleSearching} />
        <View style={style.headerView}>
          <Text style={[style.headertxt, Sharedtstyle.normaltxt]}>Image</Text>
          <Text style={[style.headertxt, Sharedtstyle.normaltxt]}>Name</Text>
          <Text style={[style.headertxt, Sharedtstyle.normaltxt]}>Category</Text>
          <Text style={[style.headertxt, Sharedtstyle.normaltxt]}>Price</Text>
        </View>
        {show ?
          <View style={style.ModalView}>
            <Modal setSwipeModal={setSwipeModal} setTitle={setTitle} selectedProduct={selectedProduct} setShow={setShow} show={show} />
          </View>
          : null}

        <SwipapleModal title={title} swipeModal={swipeModal} Element={() => <AdminProductFormScreen AddProductsetSwipeModal={setSwipeModal} title={title} />} setSwipeModal={setSwipeModal} />
        <View style={style.listView}>
          <FlatList renderItem={({ item, index }) => <AdminProductItem SetselectedProduct={SetselectedProduct} setShow={setShow} product={item} index={index} />} data={filterd} />
        </View>
      </View>
    </ScrollView>
  )
}



const style = StyleSheet.create({
  mainView: {
    padding: 20,
 
  },
  actionViews: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listView:{
    marginBottom:50
  }
  ,
  addView: {
    flexDirection: 'row',
    backgroundColor: '#0353a4eb',
    padding: 9,

  },
  Orders: {
    flexDirection: 'row',

    backgroundColor: '#0353a4eb',
    elevation: 7,
    padding: 10,
  },
  bttxt: {
    color: 'white'
  },
  icons: {
    marginRight: 10,
  },
  searchBar: {
    height: 40,
    marginBottom: 50,

  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    elevation: 5,
    height: 40,
    backgroundColor: '#e1e1e1'
  },
  headertxt: {
    fontWeight: 'bold'
  },
  ModalView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    top: height / 3,
    right: width / 7,

  },
  activity_IndcatorView: {
    position: 'absolute',
    backgroundColor: '#ffffffede',
    elevation: 7,
    zIndex: 2,
    top: 0,
    right: width / 2.9,
  }
})

export default observer(AdmonProductFormScreem)