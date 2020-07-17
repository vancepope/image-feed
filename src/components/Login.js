import React, { useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { AppContext } from '../context/AppContext';
import LoginForm from './LoginForm';

export default function Login(props) {
    const [state, setContext] = useContext(AppContext);
    const { navigation } = props;
    return (
        <View styles={styles.appContainer}>
            <LoginForm navigation={navigation} /> 
        </View>
    );
}

const styles = StyleSheet.create({ 
  appContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center', 
    alignSelf: 'center',
    marginTop: '200',
  },
  image: {
    width: Math.round(Dimensions.get('window').width), 
    height: Math.round(Dimensions.get('window').height), 
    justifyContent: 'center',
    resizeMode: 'cover',
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