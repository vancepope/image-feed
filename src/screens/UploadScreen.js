import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function UploadScreen(props) {
  const [state, setState] = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>
                <Text>Upload</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}
UploadScreen.navigationOptions = {
    headerTitle: 'Sharp Shooter',
    headerStyle: {
      backgroundColor: '#c01b33'
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