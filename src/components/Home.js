import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Home() {
    const [state, setContext] = useContext(AppContext);
    return (
        <View style={styles.container}>
        <ScrollView style={styles.timerList}>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    flexDirection: 'row', 
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
});