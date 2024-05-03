import { View,Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Navbar(){
    return(
        <View style={{display: 'flex', flexDirection: 'row-reverse',padding: 80,gap:12,backgroundColor:'grey',height: 20}}>
           
            
                <View style={{backgroundColor: 'orange',height: 30, width: 50}}>
                 <Text>tentang</Text> 
                </View>

                <View style={{backgroundColor: 'orange',height: 30, width: 50}}>
                 <Text>home</Text> 
                </View>

                 <View style={{backgroundColor: 'orange',height: 30, width: 50}}>
                 <Text>kembali</Text> 
                </View>
           
           
            
        </View>
    )
}