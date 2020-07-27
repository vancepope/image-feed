import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Text, SafeAreaView, Platform } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ProfileScreen(props) {
  const [state, setState] = useContext(AppContext);
  const screenWidth = Dimensions.get('window').width;
  return (
    <ScrollView style={styles.container}>
        <View>
            <Text>Profile</Text>
        </View>
    </ScrollView>
  );
}
ProfileScreen.navigationOptions = {
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