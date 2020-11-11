import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack' //tem que declarar o tipo de navegação já que está separada

import Home from './src/pages/Home'
import Eventos from './src/pages/Eventos'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>{
        <Stack.Navigator>

          <Stack.Screen name="Home"  component={Home}/>
          <Stack.Screen name="Eventos"  component={Eventos}/>


        </Stack.Navigator>

      }</NavigationContainer>
  );
}


