import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useContext, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './src/navigation/AppNavigator';
import { AppProvider } from './src/context/AppContext';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        style={styles.container}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <AppProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle={styles.container} />}
          <AppNavigator {...props} />
        </View>
      </AppProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    // Asset.loadAsync([
    //   //require('./assets/images/robot-dev.png'),
    // ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
const navigationOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor: "#000"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};