import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Constants from 'expo-constants';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Styles from '../styles.js'


export default class SignIn extends React.Component {

  emailInput = null;

  render() {
    return (
      <SafeAreaView style={Styles.containerGoWeb}>
        <Text style={Styles.textoGoWeb}>Cria já a sua conta!</Text>

        <View  style={Styles.viewMargin}  />

        <Formik

          initialValues={{ name: '', email: '', contact: '', password: '',confirmPassword:'',}}

          validationSchema={Yup.object({

            name: Yup.string()              
                .required('Required'),

            email: Yup.string()
                .email('Invalid Email')
                .required('Required'),

            contact: Yup.string()
            .required('Required')
            .min(8, 'invalid number')
            .matches(/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/, 'invalid'),

                
            password: Yup.string()
                .required('No password provided.') 
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/(?=.*[a-z])/, 'one lowercase required!')
                .matches(/(?=.*[A-Z])/, 'one uppercase required!')
                .matches(/(?=.*[0-9])/, 'one number required!'),

            confirmPassword: Yup.string()
              .required('you must confirm the password')
              .oneOf([Yup.ref('password')],'password must match !'),
          })}

          onSubmit={(values, formikActions) => {
                setTimeout(() => {
                    Alert.alert(JSON.stringify(values));
                    // Important: Make sure to setSubmitting to false so our loading indicator
                    // goes away.
                    formikActions.setSubmitting(false);
                }, 500);
          }}>

          {props => (

            <View>

             <TextInput
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                autoFocus
                placeholder="Usuário"
                style={styles.input}
                onSubmitEditing={() => {
                  // on certain forms, it is nice to move the user's focus
                  // to the next input when they press enter.
                  this.emailInput.focus()
                }}
              />
              {props.touched.name && props.errors.name ? (
                <Text style={styles.error}>{props.errors.name}</Text>
              ) : null}

             <View  style={Styles.viewMargin}  />
                
                   
              <TextInput
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                placeholder="Email "
                style={styles.input}
                ref={el => this.emailInput = el}
                onSubmitEditing={() => {
                    // on certain forms, it is nice to move the user's focus
                    // to the next input when they press enter.
                    this.contactInput.focus()
                  }}
                
              /> 

              {props.touched.email && props.errors.email ? (
                <Text style={styles.error}>{props.errors.email}</Text>
              ) : null}

              <View  style={Styles.viewMargin}  />

              <TextInput
                onChangeText={props.handleChange('contact')}
                onBlur={props.handleBlur('contact')}
                value={props.values.contact}
                placeholder="Contacto"
                style={styles.input}
                ref={el => this.contactInput = el}//focus em teste!! -------> funciona!!!!
                onSubmitEditing={() => {
                  // on certain forms, it is nice to move the user's focus
                  // to the next input when they press enter.
                  this.passwordInput.focus()

                }}
              />
              {props.touched.contact && props.errors.contact ? (
                <Text style={styles.error}>{props.errors.contact}</Text>
              ) : null}

              <View  style={Styles.viewMargin}  />
                

              <TextInput secureTextEntry={true}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                value={props.values.password}
                placeholder="Senha"
                style={styles.input}
                ref={el => this.passwordInput = el}
                onSubmitEditing={() => {
                  // on certain forms, it is nice to move the user's focus
                  // to the next input when they press enter.
                  this.confirmPasswordInput.focus()

                }}

              />

              {props.touched.password && props.errors.password ? (
                <Text style={styles.error}>{props.errors.password}</Text>
              ) : null}

              <View  style={Styles.viewMargin}  />

              <TextInput secureTextEntry={true}
                onChangeText={props.handleChange('confirmPassword')}
                onBlur={props.handleBlur('confirmPassword')}
                value={props.values.confirmPassword}
                placeholder='Confirme a senha'
                style={styles.input}
                ref={el => this.confirmPasswordInput = el}
                onSubmitEditing={ () => {

                  //cenas, cenas -- faltou o props abaixo!!!! + a view vazia
                }}
                />

                {props.touched.confirmPassword && props.errors.confirmPassword ? (
                    <Text style={styles.error}>  {props.errors.confirmPassword} </Text>
                ): null}

                <View style={Styles.viewMargin} />


              <Button
                onPress={props.handleSubmit}
                color="#D0DD27"
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={Styles.btnGoWeb}
                title='Submit'
                
                />

                <View  style={Styles.viewMargin}  />

              
              <Button
                onPress={props.handleReset}
                color="#D0DD27"
                mode="outlined"
                disabled={props.isSubmitting}
                style={Styles.btnGoWeb}
                title='reset'
                />
                
              
            </View>

          )}

        </Formik>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 200,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    margin: 8,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 30,
    paddingHorizontal: 8,
    width: 200,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    
  },
});


