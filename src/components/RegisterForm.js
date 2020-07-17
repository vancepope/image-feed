import React, { useContext } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, TextInput, TouchableOpacity, Button } from 'react-native';
import { AppContext } from '../context/AppContext';
import { registerUser } from '../utils/Firebase';

export default function LoginForm(props) {
    const [state, setContext] = useContext(AppContext);
    function signUp() {
        //let user = firebase.auth().currentUser;
        setContext(state => ({...state, loading: true}));
        var result = registerUser(state.email, state.password);
        console.log(result);
        // if (result.) {

        // }
    }
    return (
        <View>
            <View style={{flex: 1, flexDirection: 'column', flexBasis: '100%'}}>
                <Text>Email: </Text>
                <TextInput value={state.email} 
                            style={styles.textInput}
                            multiline={false} 
                            onChangeText={value => setContext(state => ({...state, email: value}))} 
                />
            </View>
            <View style={{flex: 1, flexDirection: 'column', flexBasis: '100%'}}>
                <Text>Password: </Text>
                <TextInput value={state.password} 
                            style={styles.textInput}
                            onChangeText={value => setContext(state => ({...state, password: value}))}
                            textContentType={'password'} 
                            multiline={false} 
                            secureTextEntry={true} 
                />
            </View>
            <View style={{flex: 1, flexDirection: 'column', flexBasis: '100%'}}>
                <Button 
                    style={styles.button}
                    onPress={signUp}
                    title='Register'
                    borderColor='#000'
                    borderRadius='2'
                    textStyle={styles.buttonText}
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
  smallText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    opacity: 1
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
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
  detailsContainer: {
    width: Math.round(Dimensions.get('window').width), 
    height: Math.round(Dimensions.get('window').height), 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.2)', 
    paddingHorizontal: 20,
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
    borderColor: '#000',
    color: '#fff',
    backgroundColor: '#000'
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
    backgroundColor: '#666', 
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20, 
    marginHorizontal: 20, 
    paddingHorizontal: 10, 
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: 10,
  },
});