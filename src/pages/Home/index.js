import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from './styles'

export default function Home({navigation}) {

    return(

        <View style= {styles.containerGoWeb}>

            <Text style= {styles.textoGoWeb}>
                Minha home de novo!
            </Text>

            <Button

                style={styles.btnGoWeb}
                title = "Eventos"
                onPress={ () => navigation.navigate('Eventos')} />

        </View>

    )

    
}
