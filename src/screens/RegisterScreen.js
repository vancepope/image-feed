import * as WebBrowser from 'expo-web-browser';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { AppContext } from '../context/AppContext';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Register from '../components/Register';

export default function RegisterScreen(props) {
  const [state, setState] = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <Register {...props}/>
    </SafeAreaView>
  );
}
RegisterScreen.navigationOptions = {
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
        color: '#fff',
        paddingHorizontal: 50,
    },
});