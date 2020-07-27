import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { CircleButton } from "../elements";
import { MemoList } from "../components";

export class MemoListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList />
        <CircleButton name="plus" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default MemoListScreen;
