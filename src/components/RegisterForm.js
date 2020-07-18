import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { AppContext } from '../context/AppContext';
import { registerUser } from '../utils/Firebase';
import CustomButton from './CustomButton';

export default function RegisterForm(props) {
    const [state, setContext] = useContext(AppContext);
    function validatePassword() {
        let passwordRegex = new RegExp('/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?\/~_+-=|]).{6,16}$/');
        if (!passwordRegex.exec(state.password)) {
            setContext(state => ({...state, loading: false, isWeakPassword: true}));
        } else {
            setContext(state => ({...state, isWeakPassword: false}));
        }
        if (state.confirmedPassword !== state.password) {
            setContext(state => ({...state, loading: false, isPasswordError: true}));
        } else {
            setContext(state => ({...state, isPasswordError: false}));
        }
    }
    function validateEmail() {
        let emailRegex = new RegExp('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/');
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
        if (state.isPasswordError || state.isWeakPassword || state.isEmailNotValid) {
            return;
        } else {
            await registerUser(state.email, state.password)
                .then((response) => {
                    if (response && response.user) {
                        setContext(state => ({...state, data: response.user, loading: false, userName: '', password: ''}));
                        props.navigation.navigate('Feed');
                    } else {
                        setContext(state => ({...state, loading: false, password: ''}));
                        alert(`Error: Please try again`,'Ok')
                    }
                }).catch(err => {
                    setContext(state => ({...state, loading: false, password: ''}));
                    alert(`${err.message}`,'Ok')
                });
        }
    }
    return (
        <KeyboardAvoidingView style={styles.loginContainer}>
            <Image source={state.logo} />
            <View style={styles.textStyle}>
                <Text style={styles.smallText}>Email: </Text>
                <TextInput value={state.email} 
                            style={styles.textInput}
                            multiline={false} 
                            onChangeText={value => setContext(state => ({...state, email: value}))} 
                />
                {
                    state.isEmailNotValid && <Text style={styles.errorText}>{state.emailNotValid}</Text>
                }
            </View>
            <View style={styles.textStyle}>
                <Text style={styles.smallText}>Password: </Text>
                <TextInput value={state.password} 
                            style={styles.textInput}
                            onChangeText={value => setContext(state => ({...state, password: value}))}
                            textContentType={'password'} 
                            multiline={false} 
                            secureTextEntry={true} 
                />
                {
                    state.isWeakPassword && <Text style={styles.errorText}>{state.weakPassword}</Text>
                }
            </View>
            <View style={styles.textStyle}>
                <Text style={styles.smallText}>Confirm Password: </Text>
                <TextInput value={state.confirmedPassword} 
                            style={styles.textInput}
                            onChangeText={value => setContext(state => ({...state, confirmedPassword: value}))}
                            textContentType={'password'} 
                            multiline={false} 
                            secureTextEntry={true} 
                />
                {
                    state.isPasswordError && <Text style={styles.errorText}>{state.passwordError}</Text>
                }
            </View>
            <View style={styles.textStyle}>
                <CustomButton
                    onPress={userSignUp}
                    title='Sign Up'
                    color='white'
                    bgColor={'#222e61'}
                    disabled={false}
                    isNotSignRegister={false}
                />
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  largeText: {
    textAlign: 'center',
    fontSize: 44,
    color: '#fff',
    opacity: 1
  },
  smallText: {
    fontSize: 18,
    color: '#fff',
    opacity: 1
  },
  errorText: {
    fontSize: 12,
    color: '#fff',
    opacity: 1
  },
  textStyle: {
    color: '#222e61',
    paddingBottom: 25,
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
  imageContainer: {
    flex: 1,
  }, 
  image: {
    width: Math.round(Dimensions.get('window').width), 
    height: Math.round(Dimensions.get('window').height), 
    resizeMode: 'cover',
  },
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
    flexGrow: 100,
    borderColor: '#000',
    color: '#fff',
    backgroundColor: '#c01b33'
  }, 
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  title: {
    fontSize: 14, fontWeight: 'bold',
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