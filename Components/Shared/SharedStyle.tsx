import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width

export const Sharedtstyle = StyleSheet.create({

    basicInput:{
        marginTop: 20,
        height: 50,
        borderWidth: 1,
        textAlign: 'center',
        width:200
      
    },
    netxtbt:{
        marginTop:30
    },
    title:{
        color:'#c97500',
        fontWeight:'900',
        marginTop:15,
        fontSize:23
    },
    activityIndctor:{
        position:'absolute',
        top:width /4,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        opacity:1,
        zIndex:2,

    },
    normaltxt:{
        color:'black'
    },
    mainVwiew:{
        marginBottom:20,
        justifyContent:'center',
        alignContent:'center'
    }
    

})  