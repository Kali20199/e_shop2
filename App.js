import React, { useEffect } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from './store/store';
import MainNavigator from './Components/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App(props) {

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
    // <View>
    //   <Text>dfsdfsdf</Text>
    // </View>


<NavigationContainer>

<MainNavigator />

</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#f0f0f0',

  },
  box: {
    height: 70,
    backgroundColor: 'red'
  }
});



export default observer(App)

