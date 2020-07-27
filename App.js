import React from "react";
import { StyleSheet, View } from "react-native";
import { AppBar } from "./src/components";
// import { MemoListScreen } from "./src/screens";
// import { MemoDetailScreen } from "./src/screens";
// import { MemoEditScreen } from "./src/screens";
// import { LoginScreen } from "./src/screens";
import { SignupScreen } from "./src/screens";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <SignupScreen />
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
