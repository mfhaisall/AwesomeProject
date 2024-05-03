import { createNativeTabNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import About from "../pages/About";
import Minuman from "../pages/Minuman";
import Masakan from "../pages/Masakan";
import Kering from "../pages/Kering";
import Basah from "../pages/Basah";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rendang from "../pages/masakan/rendang";

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();
function NavigasiBottom () {
    return(
<Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='About' component={About}/>
            
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
        <Stack.Screen name="Kering" component={Kering} />
        <Stack.Screen name="Basah" component={Basah} />
        <Stack.Screen name="rendang" component={rendang} />
      </Stack.Navigator>
    );
};