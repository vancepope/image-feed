import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { AppContext } from '../context/AppContext';
import { loginWithUsernamePassword } from '../utils/Firebase';
import CustomButton from './CustomButton';

export default function LoginForm(props) {
    const [state, setContext] = useContext(AppContext);
    async function loginUser() {
        setContext(state => ({...state, loading: true}));
        await loginWithUsernamePassword(state.email, state.password)
            .then((response) => {
                if (response && response.user) {
                    setContext(state => ({...state, data: response.user, loading: false}));
                    props.navigation.navigate('Feed');
                } else {
                    setContext(state => ({...state, loading: false}));
                    alert(`Error: Please try again`,'Ok')
                }
            }).catch(err => {
                setContext(state => ({...state, loading: false, userName: '', password: ''}));
                alert(`${err.message}`,'Ok')
            });
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
            </View>
            <View style={styles.textStyle}>
                <CustomButton
                    onPress={loginUser}
                    title='Login'
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