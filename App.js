import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 

import Home from './src/pages/Home'
import Eventos from './src/pages/Eventos'


const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer  >{
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Home',}}
            />

          <Stack.Screen
            name="Eventos"
            component={Eventos} 
          />


        </Stack.Navigator>

      }</NavigationContainer>
  );
}


