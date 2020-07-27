import React, { useContext } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { AppContext } from '../context/AppContext';
import LoginForm from './LoginForm';
import KeyboardShift from './KeyboardShift';

export default function Login(props) {
    const [state, setContext] = useContext(AppContext);
    const { navigation } = props;
    return (
        <KeyboardShift>
          {() => (
            <View>
              <View style={styles.imageContainer}>
                <Image source={state.logo} />
              </View>
              {
                state.error && <Text style={styles.errorText}>{state.errorMessage}</Text>
              }
              <View style={styles.formContainer}>
                <LoginForm navigation={navigation} /> 
              </View>
            </View>
          )}
        </KeyboardShift>
    );
}

const styles = StyleSheet.create({ 
  imageContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: 100
  },
  errorContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  errorText: {
    color: '#fff',
    height: 60,
    width: 300,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 0,
    marginHorizontal: 20, 
    paddingHorizontal: 10, 
    alignSelf: 'center',
  },
  titleContainer: {
    paddingTop: 35, 
    paddingBottom: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#D6D7DA',
    backgroundColor: '#DD434B',
  }, 
  title: {
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center',
    color: '#fff'
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