import React from 'react'

import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper/src'
import { IProduct } from '../../Models/ProductModel'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
function PorductSwipper(product) {
    const prod = product.product
    return (
        <View style={styles.wrapper}  >
            <Swiper showsButtons loop={true} autoplay={true} scrollEnabled >
                {prod.map((e) => {
                    return <View style={styles.imgView}>
                        <Image

                            style={styles.img} source={{ uri: e.imageUrl }} />
                    </View>
                })}

            </Swiper>
        </View>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        height: 200,

        // position:'absolute',
        // zIndex:-1


    },
    imgView: {

    },
    img: {

        height: width / 2,
        width: width,
    },

})


export default PorductSwipper