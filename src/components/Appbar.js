import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export class AppBar extends Component {
  render() {
    return (
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>MEMOT</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18
  }
});

export default AppBar
