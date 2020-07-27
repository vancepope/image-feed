import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native';
import { AppContext } from '../context/AppContext';
import { loginWithUsernamePassword } from '../utils/Firebase';
import CustomButton from './CustomButton';

export default function LoginForm(props) {
    const [state, setContext] = useContext(AppContext);
    function goToRegisterScreen() {
        props.navigation.navigate('Register');
    }
    function validateEmail() {
        let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (emailRegex.test(state.email)) {
          setContext(state => ({...state, isEmailValid: true}));
        } else {
          setContext(state => ({...state, loading: false, isEmailValid: false}));
        }
    }
    async function loginUser() {
        setContext(state => ({...state, loading: true}));
        if (state.isEmailValid) {
          await loginWithUsernamePassword(state.email, state.password)
                .then((response) => {
                    if (response && response.user) {
                        setContext(state => ({...state, data: response.user, loading: false, userName: '', password: '', error: false, errorMessage: ''}));
                        props.navigation.navigate('Feed');
                    } else {
                        setContext(state => ({...state, loading: false, errorMessage: response.message, error: true}));
                    }
                }).catch(err => {
                    setContext(state => ({...state, loading: false, password: '', errorMessage: err.message, error: true}));
                });
        }
    }
    return (
      <View style={[styles.loginContainer, styles.textStyle]}>
        <View style={styles.viewStyle}>
          <Text style={styles.smallText}>Email <Text style={styles.required}>*</Text></Text>
          <TextInput value={state.email} 
                      style={styles.textInput}
                      multiline={false}
                      onBlur={validateEmail}
                      onChangeText={value => setContext(state => ({...state, email: value}))} 
          />
          {
              !state.isEmailValid && <Text style={styles.errorText}>{state.emailNotValid}</Text>
          }
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.smallText}>Password <Text style={styles.required}>*</Text></Text>
          <TextInput value={state.password} 
                      style={styles.textInput}
                      onChangeText={value => setContext(state => ({...state, password: value}))}
                      textContentType={'password'} 
                      multiline={false} 
                      secureTextEntry={true} 
          />
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.smallText}><Text style={styles.required}>*</Text> Required field</Text>
        </View>
        <View style={styles.buttonGroup}>
            <CustomButton
                onPress={loginUser}
                title='Login'
                color='white'
                bgColor={'#222e61'}
                disabled={(state.email.length === 0 || state.password.length <= 5) ? true : false}
                isNotSignRegister={false}
            />
        </View>
        <View style={{ flexDirection:"row"}}>
          <Text style={styles.smallText}>Don't have an account? </Text>
          <Text onPress={goToRegisterScreen} style={styles.signUpLink}>Sign Up</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  largeText: {
    textAlign: 'center',
    fontSize: 44,
    color: '#fff',
    opacity: 1
  },
  required: {
    color: '#222e61',
    fontWeight: 'bold',
    fontSize: 20,
  },
  smallText: {
    fontSize: 18,
    color: '#fff',
    opacity: 1
  },
  signUpLink: {
    color: '#222e61',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 1
  },
  errorText: {
    fontSize: 12,
    marginHorizontal: 20, 
    textAlignVertical: 'center',
    color: '#fff',
    opacity: 1
  },
  viewStyle: {
    paddingBottom: 25,
  },
  textStyle: {
    color: '#222e61',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
        fontSize: 50,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 50
      },
    }),
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonGroup: {
    marginTop: 10,
    width: 300,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  textInput: {
    backgroundColor: '#fff', 
    color: '#222e61',
    height: 40,
    width: 300,
    marginTop: 20, 
    marginHorizontal: 20, 
    paddingHorizontal: 10, 
    alignSelf: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#222e61',
    borderRadius: 10,
  },
});