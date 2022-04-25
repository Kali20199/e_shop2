import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down' ;



interface Props {
    setSwipeModal: any,
    swipeModal: boolean,
    title:any,
    Element:any
}

function SwipapleModal({ swipeModal, setSwipeModal,Element }: Props) {

    let [animateModal, setanimateModal] = useState(false);
 
    return (
        <View>
            <SwipeUpDownModal 
                modalVisible={swipeModal}
                PressToanimate={animateModal}
                ContentModalStyle={styles.Modal}
                ContentModal={<View>
                   <Element/>
                </View>}    
                onClose={() => {
                    setSwipeModal(false);
                    setanimateModal(false);
                }}
                />
        </View>
    )
}



 
 





const styles = StyleSheet.create({
    containerContent: {
        height: 150,
        marginTop: 40,
        backgroundColor: '#fdfdfdec'
    },
    containerHeader: {

        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#ffffff',
    },
    headerContent: {
        marginTop: 0,
    },
    Modal: {
        height: 150,
        backgroundColor: '#fdfdfd',
        marginTop: 0,
    }
});

export default SwipapleModal