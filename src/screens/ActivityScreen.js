import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ActivityScreen(props) {
  const [state, setState] = useContext(AppContext);
  return (
    <ScrollView style={styles.container}>
        <View>
            <Text>Activity</Text>
        </View>
    </ScrollView>
  );
}

ActivityScreen.navigationOptions = {
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