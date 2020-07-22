import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, TextInput } from 'react-native';
import { AppContext } from '../context/AppContext';
import { registerUser } from '../utils/Firebase';
import CustomButton from './CustomButton';

export default function RegisterForm(props) {
    const [state, setContext] = useContext(AppContext);
    function validatePassword() {
        let passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?\/~_+-=|]).{6,16}$/);
        if (!passwordRegex.exec(state.password)) {
            setContext(state => ({...state, loading: false, isWeakPassword: true}));
        } else {
            setContext(state => ({...state, isWeakPassword: false}));
        }
        if ((state.confirmedPassword !== state.password) || state.confirmedPassword.length === 0) {
            setContext(state => ({...state, loading: false, isPasswordError: true}));
        } else {
            setContext(state => ({...state, isPasswordError: false}));
        }
    }
    function validateEmail() {
      let emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
      if (!emailRegex.exec(state.email)) {
          setContext(state => ({...state, loading: false, isEmailNotValid: true}));
      } else {
          setContext(state => ({...state, isEmailNotValid: false}));
      }
    }
    async function userSignUp() {
        setContext(state => ({...state, loading: true}));
        validatePassword();
        validateEmail();
        if (!state.isPasswordError || !state.isWeakPassword || !state.isEmailNotValid) {
          await registerUser(state.email, state.password)
              .then((response) => {
                  if (response && response.user) {
                      setContext(state => ({...state, data: response.user, loading: false, userName: '', password: ''}));
                      props.navigation.navigate('Feed');
                  } else {
                      setContext(state => ({...state, loading: false, password: '', confirmedPassword: ''}));
                      alert(`Error: Please try again`,'Ok')
                  }
              }).catch(err => {
                  setContext(state => ({...state, loading: false, password: ''}));
                  alert(`${err.message}`,'Ok')
              });
        }
    }
    return (
      <View style={[styles.loginContainer, styles.textStyle]}>
        <View style={styles.viewStyle}>
            <Text style={styles.smallText}>Email <Text style={styles.required}>*</Text> </Text>
            <TextInput value={state.email} 
                        style={styles.textInput}
                        multiline={false} 
                        onBlur={validateEmail}
                        onChangeText={value => setContext(state => ({...state, email: value}))} 
            />
            {
                state.isEmailNotValid && <Text style={styles.errorText}>{state.emailNotValid}</Text>
            }
        </View>
        <View style={styles.viewStyle}>
            <Text style={styles.smallText}>Password <Text style={styles.required}>*</Text></Text>
            <TextInput value={state.password} 
                        style={styles.textInput}
                        onChangeText={value => setContext(state => ({...state, password: value}))}
                        textContentType={'password'} 
                        onBlur={validatePassword}
                        multiline={false} 
                        secureTextEntry={true} 
            />
            {
                state.isWeakPassword && <Text style={styles.errorText}>{state.weakPassword}</Text>
            }
        </View>
        <View style={styles.viewStyle}>
            <Text style={styles.smallText}>Confirm Password <Text style={styles.required}>*</Text> </Text>
            <TextInput value={state.confirmedPassword} 
                        style={styles.textInput}
                        onChangeText={value => setContext(state => ({...state, confirmedPassword: value}))}
                        textContentType={'password'} 
                        onBlur={validatePassword}
                        multiline={false} 
                        secureTextEntry={true} 
            />
            {
                state.isPasswordError && <Text style={styles.errorText}>{state.passwordError}</Text>
            }
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.smallText}><Text style={styles.required}>*</Text> Required field</Text>
        </View>
        <View style={styles.buttonGroup}>
            <CustomButton
                onPress={userSignUp}
                title='Sign Up'
                color='white'
                bgColor={'#222e61'}
                disabled={(state.email.length === 0 || state.password.length <= 5 || state.confirmedPassword.length <=5) ? true : false}
                isNotSignRegister={false}
            />
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