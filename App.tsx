import { StatusBar } from 'expo-status-bar';
import { type ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(): ReactElement<any, any> {
  return (
    <View style={styles.container}>
      <Text>Start High</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
