import { observer } from 'mobx-react-lite';
import React from 'react'
import { View,Image,Text ,StyleSheet,Dimensions, Button, Alert} from 'react-native'
import { IProduct } from '../../Models/ProductModel';



const width = Dimensions.get('window').width

function ProductCards({product}:any) {
 
  const prod = product as IProduct
  return (  
    <View style={styles.CardView}>  
    
        <View style={styles.Container}> 

            <Image style={styles.img} 
        

            source={{uri:prod.imageUrl}} />
            <View  style={styles.info} >
                <Text style={styles.title}>{prod.name}</Text>
                <Text style={styles.price}>{prod.price}$</Text> 
               
                    <Text   style={styles.Add} onPress={()=>{}}>Add</Text>
                    
            </View>
        </View>  
    </View>
  )
}


 


const styles = StyleSheet.create({
    CardView:{
        padding: 10,
        paddingTop:15,
    },
    img:{
    marginTop:10,
    height:150,
    width:140
    },
    Container:{
        width: width   /2.3,
        
        borderRadius:15,
        elevation:5,
      
        alignItems:'center',
        backgroundColor:'#ffffff'

        
    },
    info:{
      
        alignItems:'center'
    },
    title:{
      color:'#000000ec',
      fontSize:17,
      
    },
    price:{
        color:'#e37d00ed',
        fontWeight:'900',
        fontSize:17,
     
    },
    Add:{
    color:'#09b03eed',
    fontSize:17,
    }
});
 
export default observer(ProductCards)