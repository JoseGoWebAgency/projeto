import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Constants from 'expo-constants';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Styles from '../styles.js'


export default class Login extends React.Component {
  emailInput = null;
  render() {
    return (
      <SafeAreaView style={Styles.containerGoWeb}>
        <Text style={Styles.textoGoWeb}>Acessa já a sua conta!</Text>
        <View  style={Styles.viewMargin}  />

        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={Yup.object({
            name: Yup.string()              
              .required('Required'),
            email: Yup.string()
              .email('Invalid Email')
              .required('Required'),
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
              />
              {props.touched.email && props.errors.email ? (
                <Text style={styles.error}>{props.errors.email}</Text>
              ) : null}

              <View  style={Styles.viewMargin}  />
                

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


