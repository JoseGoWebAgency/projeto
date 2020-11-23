import React, { Component } from 'react'
import {View, Text,} from 'react-native'

import api from '../../services/api'
import Styles from '../styles'



export default class Eventos extends Component {

    state = {
        filmes: [] 
    }

    constructor() {
        super()
        api.get().then(res => {
            console.log(res.data) 
            this.setState({filmes:[ res.data]})
        })
    }

    render() {

    
            

        return(

            <View style= {Styles.containerGoWeb} >


            <Text  style= {Styles.textoGoWeb} >
                Eveeeeentttoooooooooo!!!
                
            </Text>

            {this.state.filmes.map( filme => {
                return <Text style= {Styles.textoGoWeb}>{filme.Title}</Text>
            })}

        </View>

        )
    }
}
