import React from 'react'
import {View, Text, Button} from 'react-native'
import Styles from './styles.js'

export default function Home({navigation}) {

    return(

        <View style= {Styles.containerGoWeb}>

            <Text style= {Styles.textoGoWeb}>
                Minha home de novo!
            </Text>

            <Button

                style={Styles.btnGoWeb}
                title = "Eventos"
                onPress={ () => navigation.navigate('Eventos')} />

        </View>

    )

    
}
