import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({navigation}){
    return(

       <ScrollView style={{backgroundColor: 'oldlace', flex: 1}}> 
       <View style={{padding: 10, display: 'flex', alignItems: "center",gap: 12}}>
           
            <View>
            <Text style={{marginRight: 180,color:'brown',fontSize:24,fontWeight:'bold'}}>ResepOnline</Text>
            </View>

            <View>
            <Text style={{fontSize:18,fontWeight: 'bold',color:'black',paddingBottom: 20}}>belajar memasak lebih seru dan mudah bersama tutor ahlinya</Text>
            </View>

            <Pressable style={{paddingTop:40,paddingLeft: 20,backgroundColor: 'bisque',borderRadius: 20, minHeight: 100, minWidth: 300}}
            onPress={() => navigation.navigate("Masakan")}>
            <Text style={{fontSize: 24, fontWeight: 'bold',color: 'black'}}>masakan </Text>
            <Text style={{color: 'grey',paddingTop: 1,fontSize: 12}}> gratis 30 hari pertama</Text>
            </Pressable>

            <Pressable style={{paddingTop:40,paddingLeft: 20,backgroundColor: 'burlywood',borderRadius: 20, minHeight: 100, minWidth: 300}}
            onPress={() => navigation.navigate("Minuman")}>
            <Text style={{fontSize: 24, fontWeight: 'bold',color: 'black'}}>minuman</Text>
            <Text style={{color: 'grey',paddingTop: 1,fontSize: 12}}> gratis 30 hari pertama</Text>
            </Pressable>

            <Pressable style={{paddingTop:40,paddingLeft: 20,backgroundColor: 'bisque',borderRadius: 20, minHeight: 100, minWidth: 300}}
            onPress={() => navigation.navigate("Kering")}>
            <Text style={{fontSize: 24, fontWeight: 'bold',color: 'black'}}>kue kering</Text>
            <Text style={{color: 'grey',paddingTop: 1,fontSize: 12}}> gratis 30 hari pertama</Text>
            </Pressable>

            <Pressable style={{paddingTop:40,paddingLeft: 20,backgroundColor: 'burlywood',borderRadius: 20, minHeight: 100, minWidth: 300}}
            onPress={() => navigation.navigate("Basah")}>
            <Text style={{fontSize: 24, fontWeight: 'bold',color: 'black'}}>kue basah</Text>
            <Text style={{color: 'grey',paddingTop: 1,fontSize: 12}}> gratis 30 hari pertama</Text>
            </Pressable>

             
        
        </View>

        
            <View style={{display: 'flex', flexDirection: 'row-reverse',gap: 15,padding:10,paddingLeft: 60}}>
                <View style={{backgroundColor: 'grey',height: 120,width: 120}}>
                <Text style={{paddingTop: 20,paddingLeft: 10,fontWeight: 'bold',color: 'black',fontSize: 16}}>kelas premium</Text>
                <Text style={{color: 'black',fontSize: 10,paddingLeft: 10,fontWeight: 'bold'}}>150.000.00/bulan</Text>
                <Text style={{fontSize: 8,color: 'white',paddingLeft: 10,paddingBottom: 5}}>dapatkan cashback hingga 50% dengan akses premium dengan memasak lebih experience</Text>
                </View>

                <View style={{backgroundColor: 'gold',height: 120,width: 120}}>
                <Text style={{paddingTop: 20,paddingLeft: 10,fontWeight: 'bold',color: 'black',fontSize: 16}}>kelas emas</Text>
                <Text style={{color: 'black',fontSize: 10,paddingLeft: 10,fontWeight: 'bold'}}>400.000.00/3bulan</Text>
                <Text style={{fontSize: 8,color: 'grey',paddingLeft: 10,paddingBottom: 5}}>dapatkan cashback hingga 30% dengan akses emas dengan memasak lebih experience,dapatkan juga resep lebih dari 300 semua masakan internasional</Text>
                
                </View>
            </View>
       
            <View>
                <Text style={{color:'black',fontSize: 12,paddingTop: 30,marginLeft:5}}>aplikasi ini dibuat untuk memudahkan semua orang untuk belajar memasak di era digital,selain itu banyak juga fitur yang lain yang tersedia.nantikan update terbaru dari developer ya</Text>
            </View>
           
            <View style={{padding:20}}>
            <View style={{backgroundColor: 'lightblue',borderRadius: 10, height: 100,padding:30,paddingLeft:80}}>
            <Text style={{fontSize: 24, fontWeight: 'bold',color: 'black',marginHorizontal: 10}}>feed back</Text>
            </View>
            </View>

            
        </ScrollView>
    )
}