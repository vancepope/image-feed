import * as WebBrowser from 'expo-web-browser';
import React, { useContext } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { AppContext } from '../context/AppContext';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Home from '../components/Home';

export default function FeedScreen(props) {
  const [state, setState] = useContext(AppContext);

  return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row'}}>
                <Home {...props}/>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}
FeedScreen.navigationOptions = {
  headerTitle: 'Sharp Shooter',
  headerStyle: {
    backgroundColor: '#000'
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