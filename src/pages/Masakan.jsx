import React from 'react'
import { ScrollView, Text,  View,Pressable } from 'react-native'


export default function Masakan({navigation}) {
  return (
    <ScrollView style={{backgroundColor:"bisque"}}>



<View style={{backgroundColor:'burlywood'}}>
  <Text style={{color:'black',paddingBottom: 20,marginTop:10,marginLeft:20,fontSize:18,fontWeight:'bold'}}>Resep makanan</Text>
</View>


<Pressable style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9}}onPress={()=>navigation.navigate("rendang")}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginLeft:115}}>rendang</Text>
</Pressable>

<View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginLeft:115}}>ketoprak</Text>
</View>

<View style={{backgroundColor:'grey',marginTop:20,marginLeft:30,width:300,height:30,borderRadius:9 }}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginLeft:115}}>opor ayam</Text>
</View>


        </ScrollView>

    )
}
