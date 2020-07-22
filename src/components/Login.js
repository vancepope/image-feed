import React, { useContext } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
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
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 100
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: 100
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