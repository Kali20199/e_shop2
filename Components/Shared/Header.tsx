import React from 'react'
import { View,StyleSheet,Image,SafeAreaView,Text } from 'react-native'
import LOGO from '../../assets/Images/Logo.png'
function Header() {
  return (
    <View style={styles.headerContainer}>
       
       <Image style={styles.img}
       resizeMode='contain'
       source={LOGO}/>
    
        </View>
  )
}




const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#ffffffed',
        alignItems:'center',

        
    },
    img:{
        marginTop:10,
        height:50
    },
    title:{
        marginTop:-10
    },
    container: {
      padding:10,
      flex: 1,
      backgroundColor: '#f0f0f0',
  
    },
  });

export default Header