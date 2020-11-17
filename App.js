import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 

import Home from './src/pages/Home'
import Eventos from './src/pages/Eventos'
import Login from './src/pages/Login'
import SignIn from './src/pages/SignIn'




const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer  >{
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                  title: 'Home',
                  headerStyle:{backgroundColor:'#111111'},
                  headerTitleStyle:{color:'#F6F6F6'}
                 }}
              
            />

          <Stack.Screen
            name="Eventos"
            component={Eventos} 
            options={{
              title: 'Eventos',
              headerStyle:{backgroundColor:'#111111'},
              headerTitleStyle:{color:'#F6F6F6'}
             }}
          />

          <Stack.Screen
            name="Login"
            component={Login} 
            options={{
              title: 'Login',
              headerStyle:{backgroundColor:'#111111'},
              headerTitleStyle:{color:'#F6F6F6'}
             }}
          />

            <Stack.Screen
            name="SignIn"
            component={SignIn} 
            options={{
              title: 'SignIn',
              headerStyle:{backgroundColor:'#111111'},
              headerTitleStyle:{color:'#F6F6F6'}
             }}

            />


        </Stack.Navigator>

      }</NavigationContainer>
  );
}


