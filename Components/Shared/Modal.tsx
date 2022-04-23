import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View,Animated ,Easing} from 'react-native'
import {Text,Button} from 'react-native-paper'
import { IProduct } from '../../Models/ProductModel'


interface Props {
    show: boolean,
    setShow: any,
    selectedProduct:IProduct,
    setTitle:any,
    setSwipeModal:any
}

function Modal({ show, setShow,selectedProduct,setTitle,setSwipeModal }: Props) {


    const AnimatedOpacity =new Animated.Value(0)
    const fadeAnim = useRef(new Animated.Value(0)).current
    

 
    useEffect(() => {
        Animated.timing(
            AnimatedOpacity,
          {
            toValue: 1,
            duration: 500,
          } 
        ).start();
      }, [])

    return (
        <Animated.View style={{...style.mainView,opacity:AnimatedOpacity}}>


                <View style={style.bodyView}>
                    <Text>{selectedProduct.name} </Text>
                </View> 
            <View style={style.actionView}>
                <Button>
                    Delete
                </Button>

                <Button  onPress={()=>{
                    setSwipeModal(true)
                    setTitle("Edit Product")
                    setShow(false)}}>
                    Edit
                </Button>
                <Button  onPress={()=>setShow(false)}>
                    Cancel
                </Button>
            </View>
        </Animated.View>
    )
} 



const style = StyleSheet.create({
    mainView: {
        justifyContent:'flex-end',
      
        height: 90,
        width: 250,
        backgroundColor: '#ffffffed',
        elevation: 7,
        zIndex: 3,
    },
    actionView:{

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },
    bodyView:{
        justifyContent:'flex-start',
        marginBottom:20,
        alignItems:'center'

    }
})


export default observer(Modal) 