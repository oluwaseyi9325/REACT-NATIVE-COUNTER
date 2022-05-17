import { StyleSheet } from 'react-native'


export const myCss = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#fff",
        marginTop:40,
        alignItems:'center'
    },
    img:{
        paddingTop:150
    },
    textCss:{
        fontSize:40,
        fontWeight:'bold',
         color:'black'
        },
        btn1:{
           backgroundColor:'grey',
           paddingLeft:100,
           paddingRight:100 ,
            borderRadius:40
        },
        btn2:{
            marginTop:10,
            borderWidth:1,
            paddingLeft:40,
            paddingRight:40 ,
             borderRadius:40,
             color:'black',
             alignItems:'center',
             flexDirection:'row'
         }
   
})