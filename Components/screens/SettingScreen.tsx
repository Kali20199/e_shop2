import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'
function SettingScreen() {
    return (
        <View style={style.mainView}>

            <View style={style.itemContainer}>
                <Icon name='user' size={19} />
                <Text style={style.txt}>Notificaton Settings</Text>
            </View>

            <View style={style.itemContainer}>
                <Icon name='user' size={19} />
                <Text style={style.txt}>Notificaton Settings</Text>
            </View>
        </View>
    )
}



const style = StyleSheet.create({

    mainView: {
        padding: '20%',
        width:'85%'
    },
    itemContainer: {
        flexDirection: 'row',
        height:70,
        justifyContent:'space-between',
        backgroundColor:'#ffffffebe',
        elevation:5
    },
    txt: {

    }

})

export default SettingScreen