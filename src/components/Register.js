import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Register() {
    const [state, setContext] = useContext(AppContext);
    return (
        <View style={styles.appContainer}>
        <ScrollView style={styles.timerList}>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({ 
  appContainer: {
    flex: 1, 
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
  timerList: {
    paddingBottom: 15,
  },
});