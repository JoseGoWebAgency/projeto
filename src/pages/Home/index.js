import React from 'react'
import {View, Text, Button, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from '../styles.js'

export default function Home({navigation}) {

    return(


        <SafeAreaView style= {Styles.containerGoWeb}>
            <View>

                <Image source={require("../../../assets/icon.png")}>

                </Image>

                <Text style= {Styles.textoGoWeb}>
                    Web App Go Web!
                </Text>

                <Button
                    style={Styles.btnGoWeb}
                    title = "Criar Conta"
                    onPress={ () => navigation.navigate('SignIn')} 
                    color="#D0DD27"
                />
                    
                <View  style={Styles.viewMargin}  />
                
                <Button
                    style={Styles.btnGoWeb}
                    title='Iniciar sessão'
                    color="#D0DD27"
                    onPress={ () => navigation.navigate('Login')} 
                    //
                />

            </View>

        </SafeAreaView>
    )

    
}
