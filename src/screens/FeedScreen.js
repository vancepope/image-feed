import * as WebBrowser from 'expo-web-browser';
import React, { useContext } from 'react';
import { SafeAreaView, Platform, ScrollView, StyleSheet, View, } from 'react-native';
import { AppContext } from '../context/AppContext';
import Home from '../components/Home';

export default function FeedScreen(props) {
  const [state, setState] = useContext(AppContext);
  return (
    <ScrollView style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <Home {...props}/>
        </View>
    </ScrollView>
  );
}
FeedScreen.navigationOptions = {
  headerTitle: () => null,
  headerStyle: {
    backgroundColor: '#c01b33',
    height: Platform.OS === 'ios' ? 44 : 56,
  },
  headerTintColor: '#fff',
  safeAreaInsets: { top: 50 },
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginTop: 24,
  },
});