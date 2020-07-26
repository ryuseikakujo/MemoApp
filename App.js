import React from "react";
import { StyleSheet, View } from "react-native";
import { MemoListScreen } from "./src/screens/MemoListScreen";
import { AppBar } from "./src/components";
import { MemoDetailScreen } from "./src/screens/MemoDetailScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdf6",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 78,
  },
});
