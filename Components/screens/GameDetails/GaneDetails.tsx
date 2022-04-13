import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Easing, SafeAreaView, Button, TouchableOpacity, Animated } from 'react-native'
import { useStore } from '../../../store/store'
import { observer } from 'mobx-react-lite';


const width = Dimensions.get('window').width
function GaneDetails() {
    const AnimatedHeaderValue = new Animated.Value(0)
    const HeaderMaxHeight = 350
    const { ProductStore: { selectedProduct },CartStore:{addtoCart} } = useStore()
    const AnimatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, HeaderMaxHeight - 1],
        outputRange: [HeaderMaxHeight, 100],
        extrapolate: 'clamp'
    })


    useEffect(() => {


    },[])

  
    return (
        <SafeAreaView style={styles.constainer}>
            <Animated.Image
                source={{ uri: selectedProduct.imageUrl }}
                style={{...styles.header, 
                    height: AnimatedHeaderHeight}}

               />



            <ScrollView scrollEventThrottle={16} onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
                { useNativeDriver: false },
            )}>

                <View style={styles.info}>
                    <View style={styles.AddView}>
                        <View>
                            <Text style={styles.name}>{selectedProduct.name}</Text>
                        </View>

                    </View>
                    <View>
                        <Text style={styles.richDescription}>{selectedProduct.richDescription}</Text>
                    </View>
                    <View style={styles.btAdd}>
                        <Text style={{ ...styles.price, color: selectedProduct.color }}>{selectedProduct.price}$</Text>
                        <Button color={selectedProduct.color} onPress={() => {
                                addtoCart(selectedProduct,0,selectedProduct._id)
                         }} title='Add' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}



const styles = StyleSheet.create({
    constainer: {
        flex: 1,

    },
    info: {
        padding: 10,
    },

    textStyle: {
        textAlign: 'center',
        color: '#000000ec',
        fontSize: 18,
        padding: 20
    },
    header: {
        color: '#fffff',
        fontSize: 18,
        textAlign: 'center'
    },
    mainView: {

        height: 1000,
    },
    img: {
        height: 300,
        width: width,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    AddView: {

        alignItems: 'center',
        marginTop: 20,
    },
    btAdd: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 45,
        padding: 15,
    },
    price: {
        fontSize: 20,
        color: 'black'
    },
    richDescription: {
        fontSize: 18,
        lineHeight: 35,

        fontWeight: 'bold',

    }

})

export default observer(GaneDetails) 