import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import agent from './agent/agent';
import { Category } from './Models/CategoryModel';
import ProductContainer from './Components/screens/Porducts/ProductContainer';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStore } from './store/store';
import Header from './Components/Shared/Header';
import PorductSwipper from './Components/Widgets/PorductSwipper';
import MainNavigator from './Components/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App(props: any) {

  const { userStore, ProductStore, CategoryStore } = useStore()

  const fetchFromEpress = async () => {


    await ProductStore.getProducts()
    await CategoryStore.getCatgories()

  }


  useEffect(() => {
    fetchFromEpress()

  }, [])

  {/* <Header/> */ }
  return (


    <NavigationContainer>

    <MainNavigator />

    < /NavigationContainer >


  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#f0f0f0',

  },
});



export default observer(App)

//   // 