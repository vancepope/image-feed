import * as WebBrowser from 'expo-web-browser';
import React, { useContext } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import Login from '../components/Login';

export default function LoginScreen(props) {
  const [state, setState] = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Login {...props}/>
    </View>
  );
}
LoginScreen.navigationOptions = {
  headerMode: 'none',
  headerShown: false
};
const styles = StyleSheet.create({
    container: {
        width: Math.round(Dimensions.get('window').width), 
        height: Math.round(Dimensions.get('window').height), 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#c01b33', 
        paddingHorizontal: 50,
    },
});