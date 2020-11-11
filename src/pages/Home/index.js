import React from 'react'
import {View, Text, Button} from 'react-native'

export default function Home({navigation}) {

    return(

        <View>

            <Text>
                Minha home de novo!
            </Text>

            <Button
                title = "Eventos"
                onPress={ () => navigation.navigate('Eventos')} >
            </Button>

        </View>

    )
}
