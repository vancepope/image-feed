import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions, Text, SafeAreaView } from 'react-native';
import { AuthSession } from 'expo';
import { AppContext } from '../context/AppContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function UploadScreen(props) {
  const [state, setState] = useContext(AppContext);
  const screenWidth = Dimensions.get('window').width;
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