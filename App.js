import React from 'react';
import { StyleSheet, View } from 'react-native';
import {AppBar, MemoList} from './src/components';
import { CircleButton } from './src/elements';


export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
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
