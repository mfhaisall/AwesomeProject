import React from 'react'
import { ScrollView, Text, View,Pressable } from 'react-native'

export default function Minuman() {
  return (
    <ScrollView style={{backgroundColor:"bisque"}}>
    <View style={{backgroundColor:'burlywood'}}>
      <Text style={{color:'black',paddingBottom: 20,marginTop:10,marginLeft:20,fontSize:18,fontWeight:'bold'}}>Resep minuman</Text>
    </View>
    
    
    <View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>es pisang menado</Text>
    </View>
    
    <View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>jus alpukat asam</Text>
    </View>
    
    <View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:16}}>joshua orange</Text>
    </View>
    
    
            </ScrollView>
    
    

    )
}
