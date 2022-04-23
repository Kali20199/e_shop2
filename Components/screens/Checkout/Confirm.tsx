import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import { useStore } from '../../../store/store'
import { Sharedtstyle } from '../../Shared/SharedStyle'
import ConfirmItemWidget from '../../Widgets/ConfirmItemWidget'


function Confirm() {
  const { userStore: { user, count }, OrderStore: { MyOrder, addOrder }, ProcessStore: { checkedOut, AuthProcess, PaymentProcess, ShippmentProcess } } = useStore()
  const shippment = user.shippment
  const nav = useNavigation()
  const data = [1, 2, 3, 4]



  const checkValidation = () => {

    const Valid = AuthProcess && PaymentProcess && ShippmentProcess

    return Valid
  }
 
  return (


    <ScrollView>
      <View style={style.mainView}>
        <View>
          <Text style={Sharedtstyle.title}>Confirm Orders</Text>
        </View>
        <View style={style.boxInfo}>
          <View style={style.headerContainer}>
            <Text style={style.header}>Shipping To</Text>
          </View>
          <View style={style.boxWrapper}>
            <View style={style.infoElements}>
              <View style={style.aligment}>
                <Text style={style.info}>Address :</Text>
                <Text style={style.info}>{shippment.ShippmentAddress1}</Text>
              </View>
              <View style={style.aligment}>
                <Text style={style.info}>Address 2 :</Text>
                <Text style={style.info}>{MyOrder.country}</Text>
              </View>
              <View style={style.aligment}>
                <Text style={style.info}>City :</Text>
                <Text style={style.info}>{shippment.city}</Text>
              </View>
              <View style={style.aligment}>
                <Text style={style.info}>Zip :</Text>
                <Text style={style.info}>{shippment.zip}</Text>
              </View>
              <View style={style.aligment}>
                <Text style={style.info}>Country :</Text>
                <Text style={style.info}>{shippment.city}</Text>
              </View>
            </View>
          </View>
          <View style={style.headerContainer}>
            <Text style={style.header}>Items</Text>
          </View>
          <View style={style.boxWrapper}>
            <FlatList renderItem={(item) => <ConfirmItemWidget item={item.item} />} data={MyOrder.OrderItems} />
          </View>
        </View>

      </View>
      <View style={style.actionbt}>
        <Button color={'green'} onPress={() => {
          addOrder(MyOrder)
          if (checkValidation()) {
            checkedOut()
          }else{
            Alert.alert("Please Fill All Previes info ")
          }

        }


        } title={'Place Order'} />
        <Button color={'#90009ded'} onPress={() => {
          nav.navigate('Home' as any)
        }} title={'Back To Shop'} />
      </View>
    </ScrollView>


  )
}



export const style = StyleSheet.create({

  mainView: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'

  },
  boxInfo: {
    marginTop: 10,


  },
  aligment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,


  },
  boxWrapper: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#d56f16ed'
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,

  },
  header: {

    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  infoElements: {
    alignItems: 'center',

  },
  info: {
    color: 'black',

  },
  actionbt: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90
  }

})

export default observer(Confirm)