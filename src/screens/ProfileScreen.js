import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Text, SafeAreaView } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ProfileScreen(props) {
  const [state, setState] = useContext(AppContext);
  const screenWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>
                <Text>Profile</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}
ProfileScreen.navigationOptions = {
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