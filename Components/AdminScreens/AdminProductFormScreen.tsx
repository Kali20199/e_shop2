
import React, { useEffect, useState } from 'react'
import { Alert, BackHandler, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, PermissionsAndroid, ToastAndroid } from 'react-native'
import { product } from '../../Models/EmptyClasses'
import { IProduct, Product } from '../../Models/ProductModel'
import { useStore } from '../../store/store'
import { Sharedtstyle } from '../Shared/SharedStyle'
import AddCategoryForm from './AddCategoryForm'
import SwipapleModal from './Widget/SwipapleModal'
import Entypo from 'react-native-vector-icons/Entypo'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import {TextInput} from 'react-native-paper'

function AdminProductFormScreen({ title, AddProductsetSwipeModal }: any) {
    const { ProductStore: { selectedProduct, AddNewProduct, SetselectedProduct, setFile } } = useStore()
    const [image, setimage] = useState<any>({ uri: 'https://archive.org/download/no-photo-available/no-photo-available.png' })
    const [swipeModal, setSwipeModal] = useState(false);






    const OpenCamera = async () => {

        await launchCamera({ includeBase64: true, quality: 1, mediaType: 'photo' }, ({ assets }) => {

            try {
                setimage(assets![0])
                setFile(assets![0])
            } catch (e) {

            }
        });
    }
    const SelectFromLibarary = async () => {
        await launchImageLibrary({ quality: 1, mediaType: 'photo' }, ({ assets }) => {
            setimage(assets![0])
            setFile(assets![0])
        })

    }
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                OpenCamera()
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    useEffect(() => {

        if (title == "Edit Product") {

            setimage({ uri: selectedProduct.imageUrl })
        } else {
            SetselectedProduct(product)
        }

        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);
    const handleInput = (event: any) => {
        const { nativeEvent } = event
        const Type = event._targetInst.memoizedProps.nativeID
        selectedProduct[Type]  = nativeEvent.text

    }


    const handleSubmit = () => {
        const { name, price, countInStock, richDescription } = selectedProduct
        if (name !== '' && price !== 0 && countInStock !== 0 && richDescription !== '') {
            setSwipeModal(true)
        } else {
            ToastAndroid.showWithGravity(
                "Please Fill Missing Fields",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );

        }

   
    }
    //   


    return (
        <View>
            <ScrollView style={{ marginTop: 20 }}>
                <View style={style.mainView}>
                    <View>
                        <Text style={Sharedtstyle.title}> {title}</Text>
                    </View>
                    <Image style={style.img} source={image} />
                        <TouchableOpacity onPress={() => {

                            Alert.alert("Hold on!", "Upload Image", [
                                {
                                    text: "Open Camera",
                                    onPress: () => requestCameraPermission(),
                                    style: "cancel"
                                },
                                { text: "Select From Storage", onPress: () => SelectFromLibarary() }])
                        }}>
                    <View style={style.imgView}>
                  
                            <Entypo color='black' style={style.cameraIcon} name='camera' size={25} />
                       
                    </View>
                    </TouchableOpacity>
                    <View>
                        <TextInput onBlur={() => { }} onFocus={() => { }} defaultValue={selectedProduct.name} keyboardType='default' onChange={handleInput} nativeID='name' placeholder={'name'} style={Sharedtstyle.basicInput} />
                    </View>
                    <View>
                        <TextInput defaultValue={selectedProduct.brand} onChange={handleInput} nativeID='brand' placeholder={'brand'} style={Sharedtstyle.basicInput} />
                    </View>
                    <View>
                        <TextInput defaultValue={selectedProduct.price.toString()} onChange={handleInput} nativeID='price' placeholder={'price'} style={Sharedtstyle.basicInput} />
                    </View>
                    <View>
                        <TextInput defaultValue={selectedProduct.countInStock.toString()} onChange={handleInput} nativeID='countInStock' placeholder={'countInStock'} style={Sharedtstyle.basicInput} />
                    </View>
                    <View>
                        <TextInput defaultValue={selectedProduct.richDescription} onChange={handleInput} nativeID='richDescription' placeholder={'description'} style={Sharedtstyle.basicInput} />
                    </View>

                    <View style={style.nextBtView}>
                        <Button onPress={() => {
                            handleSubmit()

                        }} title={"Next"} />
                    </View>
                    <Button title='Back' onPress={() => AddProductsetSwipeModal(false)}></Button>
                    <SwipapleModal title={title} swipeModal={swipeModal} Element={() => <AddCategoryForm AddProductsetSwipeModal={AddProductsetSwipeModal} setSwipeModal={setSwipeModal} selectedProduct={selectedProduct} />} setSwipeModal={setSwipeModal} />
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    mainView: {
        marginTop: 60,
        alignItems: 'center',

    },
    nextBtView: {
        marginTop: 30,
        marginBottom: 20,
    },

    imgView: {
        height: 170,
        width: 170,

    },
    cameraIcon: {
        position: 'absolute',
        top: 90,
        zIndex: 2,
        right: 20
    },
    img: {
        position: 'absolute',
        marginBottom: 10,
        height: 170,
        width: 170,
        borderWidth: 5,
        borderRadius: 90,
        borderColor: 'grey',

    }
})

export default AdminProductFormScreen