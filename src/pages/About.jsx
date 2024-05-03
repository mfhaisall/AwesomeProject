import React from 'react'
import { ScrollView, Text,  View } from 'react-native'

export default function About() {
  return (
    <ScrollView style={{backgroundColor:"bisque"}}>
<View style={{backgroundColor:'burlywood'}}>
  <Text style={{color:'black',paddingBottom: 20,marginTop:10,marginLeft:20,fontSize:18,fontWeight:'bold'}}>about</Text>
</View>


<View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>rendang khas padang</Text>
</View>

<View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>rendang khas padang</Text>
</View>

<View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>rendang khas padang</Text>
</View>


        </ScrollView>

    )
}
