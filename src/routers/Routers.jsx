import { createNativeTabNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Minuman from "../pages/Minuman";
import Masakan from "../pages/Masakan";
import Kering from "../pages/Kering";
import Basah from "../pages/Basah";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tentang from "../pages/Tentang";
import Sponsor from "../pages/Sponsor"
import rendang from "../pages/masakan/rendang";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();
function NavigasiBottom () {
    return(
<Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
           
            <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
            <Tab.Screen name='Tentang' component={Tentang} options={{
          tabBarLabel: 'Tentang',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
            <Tab.Screen name='Sponsor' component={Sponsor} options={{
          tabBarLabel: 'sponsor',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="barcode" color={color} size={size} />
          ),
        }}/>
            
        </Tab.Navigator>
    )
}

export default function Routers () {
    return(
        <Stack.Navigator>
        <Stack.Screen name="MainApp" component={NavigasiBottom} options={{headerShown: false}}/>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Masakan" component={Masakan} options={{headerShown: false}}/>
        <Stack.Screen name="Minuman" component={Minuman}options={{headerShown: false}} />
        <Stack.Screen name="Kering" component={Kering}options={{headerShown: false}} />
        <Stack.Screen name="Basah" component={Basah} options={{headerShown: false}} />
        <Stack.Screen name="rendang" component={rendang} />
      </Stack.Navigator>
    );
};