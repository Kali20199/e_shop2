import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useStore } from '../../store/store'
const width = Dimensions.get('window').width
function UserScreen() {
    const { ProcessStore: { AuthProcess,unAuthProcess },userStore:{logout} } = useStore()
    const nav = useNavigation()
    return (
        <View style={style.mainView}>
            <View style={style.contaienr} >
                <View style={style.textView} >
                    <Icon color={'#e07809ed'} size={18} name='user' />
                    <Text style={style.txt}>My Account</Text>

                </View>
                <View style={style.textView} >
                    <Fontisto color={'#e07809ed'} size={18} name='shopping-bag-1' />
                    <Text onPress={()=>{nav.navigate("MyOrders" as any)}} style={style.txt}>My Order</Text>

                </View >
            
                <View style={style.textView} >
                    <FontAwesome5 color={'#e07809ed'} size={18} name='house-user' />
                    <Text style={style.txt}>My Card</Text>

                </View>
                {AuthProcess ?
                    <View style={style.textView} >
                        <MaterialCommunityIcons color={'#e07809ed'} size={18} name='logout' />
                        <Text onPress={()=>{
                            unAuthProcess()
                            logout()
                         }} style={style.txt}>Logout</Text>
                    </View> :

                    <View style={style.textView} >
                        <MaterialCommunityIcons color={'#e07809ed'} size={18} name='logout' />
                        <Text onPress={()=>{nav.navigate("Login" as any)} } style={style.txt}>login</Text>
                    </View>

                }
            </View>
        </View>
    )
}



const style = StyleSheet.create({

    mainView: {
        width: width,

        padding: 15,
        justifyContent: 'center',

        alignItems: 'center'
    },
    contaienr: {
        alignItems: 'flex-start',
        marginTop: 30,

    },

    textView: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt: {
        marginLeft: 30,
        color: '#e07809ed',
        fontSize: 18,
        fontWeight: '600'
    }
})

export default  observer(UserScreen)