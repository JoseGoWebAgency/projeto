import React, { useState } from 'react'
import {View, Text, Button, TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from '../styles.js'



export default function Login() {

    const [user, setUser] = useState('Usuário');


    return(


        <SafeAreaView style= {Styles.containerGoWeb}>
            <View>

                <Text style= {Styles.textoGoWeb}>
                    Acesse já a tua conta!
                </Text>

                <TextInput
                     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                     onChangeText={text => setUser(text)}
                     value={user}
                />

                    
                <View  style={Styles.viewMargin}  />
                <Button
                    style={Styles.btnGoWeb}
                    title='Iniciar'
                    color="#D0DD27"
                    //colocar função onpress
                />

            </View>

        </SafeAreaView>
    )

    
}


