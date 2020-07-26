import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MemoListScreen } from './src/screens/MemoListScreen';
import { AppBar } from './src/components';


export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78
  }
});
