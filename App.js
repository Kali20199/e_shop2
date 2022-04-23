import React, { useEffect } from 'react';
import {  Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from './store/store';
import MainNavigator from './Components/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Components/Shared/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PERSISTENCE_KEY} from './store/User'
import Toast,{ErrorToast} from 'react-native-toast-message'
function App(props) {

  const { ProcessStore:{authProcess}, ProductStore,userStore:{user,init_User} } = useStore()

  const fetchFromEpress = async () => {


    await ProductStore.getProducts()
  
   
    const isAuth =  await AsyncStorage.getItem(PERSISTENCE_KEY)
   if(isAuth !==null) { 
    authProcess()
    init_User()
   }


  }


  useEffect(() => {
    fetchFromEpress()

  }, [])
 

  return (
    // <View>
    //   <Text>dfsdfsdf</Text>
    // </View>

 
   
     <NavigationContainer>
     <Header/> 
     <MainNavigator />
     <Toast ref={(ref)=>Toast.setRef(ref)} />
     {/* <ErrorToast ref={(ref)=>Toast.setRef(ref)}   /> */}
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

