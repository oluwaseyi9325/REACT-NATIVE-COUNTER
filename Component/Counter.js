import React,{useState} from 'react'
import { View,Text ,StyleSheet} from 'react-native'
import {Headline,Paragraph,Button,Colors,Subheading,TextInput,Divider,Appbar,Menu,Provider,List,RadioButton,Badge} from 'react-native-paper'

function Counter() {
    const [textBox,setTextBox]=useState('')
    const [inta,setInta]=useState(false)
    const [strong,setStrong]=useState('bold')
    const [wordsNum,setWordsNum]=useState(0)
    const [wordsChar,setWordChar]=useState(0)
    const delBtn=()=>{
       setTextBox(textBox.slice(0,-1))
    }
    const clrBtn=()=>{
        setTextBox("")
    }
    const upperBtn=()=>{
        setTextBox(textBox.toUpperCase())
    }
    const lowerBtn=()=>{
        setTextBox(textBox.toLowerCase())
    }
    
    const getChar=()=>{
   var rep = textBox.replace(/ /g,"");
   setWordsNum(1+rep.length)
   setWordChar(textBox.split(" ").length)
    }

  return (
    <View>
    <Appbar.Header>
      <Appbar.Content title="WORD COUNTER" />
    </Appbar.Header>
      <View style={{paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:10}}>
        <Text style={{borderWidth:1,padding:13,fontSize:20,textAlign:'center'}}>Characters :- <Badge  size={20} style={{paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,fontSize:20,backgroundColor:'blue'}}><Text style={{padding:30}}>{wordsNum}</Text></Badge></Text>
      </View>
      <View style={{paddingTop:10,paddingLeft:20,paddingRight:20,paddingBottom:10}}>
        <Text style={{borderWidth:1,padding:13,fontSize:20,textAlign:'center'}}>Words :- <Badge size={20} style={{paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,fontSize:20,backgroundColor:'blue'}}>{wordsChar}</Badge></Text>
      </View>
   
  <Divider />
    
    <View style={{padding:20}}>
      <TextInput value={textBox} onKeyPress={()=>getChar()} onChangeText={(val)=>setTextBox(val)} placeholder="Type, or copy/paste or load any content into this area..." style={Mycss.textCss} multiline />
    </View>
    <Divider />
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20}}>
      <Button onPress={()=>upperBtn()} mode='contained'>UPPER CASE</Button>
      <Button onPress={()=>lowerBtn()} mode='contained'>LOWER CASE</Button>
    </View>
    <Divider />
    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',padding:30,marginTop:30}}>
    <Button onPress={()=>clrBtn()} mode='contained' color={Colors.red300} icon='pen'>CLEAR</Button>
    <Button onPress={()=>delBtn()} icon='delete' color={Colors.yellow300} mode='contained'>DELETE</Button>
  </View>

    </View>
  )
}

export default Counter

const Mycss = StyleSheet.create({
    textCss:{
        borderWidth:0
        ,backgroundColor:'whitesmoke',
        borderStyle:'solid',
        borderColor:'burlywood',
        fontSize:20,
        paddingTop:30,
        paddingBottom:30,
       
        
    }
})
