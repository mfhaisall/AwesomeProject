import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './routers/Routers';
import { StatusBar, View } from 'react-native';

function App () {


  return(
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  )


 } 


export default App

