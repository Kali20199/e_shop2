import React from 'react'
import { View,Text,StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useStore } from '../../store/store';
import { ICategory } from './../../Models/CategoryModel';
const width = Dimensions.get('window').width

function CategoryWidget(category:any) {
  const {ProductStore:{getProductByCategory,clearCategoryFilter}} = useStore()
  const categorys = category.data as ICategory 
  return (
    <TouchableOpacity onPress={()=>{

      getProductByCategory(categorys._id)
    }}>
      <View style={styles.mainView}>
          <View style={styles.Card}>
            <Text style={styles.categoryName}>
               {categorys.name}
            </Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  mainView:{
    marginTop:20,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center',
   
  },
  Card:{
    justifyContent:'center',
    marginLeft:12,
    elevation:5,
    alignItems:'center',
    borderRadius:12,
    height:40,
    padding:10,
    backgroundColor:'#4ecfe6eb'
  },
  categoryName:{  
    fontWeight:'bold',
    color:'#ffffffec'
  }

})

export default CategoryWidget