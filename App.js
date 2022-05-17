import { View,TextInput ,Text,Button,Alert,Image,TouchableOpacity,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Counter from './Component/Counter'

 
export default function App() {
  return(
   
   
     <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
     <ScrollView>
     <Counter/>
    </ScrollView>
     </TouchableWithoutFeedback>
     

  )
}
