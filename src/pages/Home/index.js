import React from 'react'
import {View, Text, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from './styles.js'

export default function Home({navigation}) {

    return(


        <SafeAreaView style= {Styles.containerGoWeb}>
            <View>

                <Text style= {Styles.textoGoWeb}>
                    Web App Go Web!
                </Text>

                <Button
                    style={Styles.btnGoWeb}
                    title = "Criar Conta"
                    onPress={ () => navigation.navigate('Eventos')} 
                    color="#D0DD27"
                />
                    
                <View  style={Styles.viewMargin}  />
                <Button
                    style={Styles.btnGoWeb}
                    title='Iniciar sessão'
                    color="#D0DD27"
                    //colocar função onpress
                />

            </View>

        </SafeAreaView>
    )

    
}
