import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Text, Platform } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function UploadScreen(props) {
  const [state, setState] = useContext(AppContext);
  return (
    <ScrollView style={styles.container}>
        <View>
            <Text>Upload</Text>
        </View>
    </ScrollView>
  );
}
UploadScreen.navigationOptions = {
  headerTitle: () => null,
  headerStyle: {
    backgroundColor: '#fff',
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