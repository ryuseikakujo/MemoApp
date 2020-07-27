import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { CircleButton } from "../elements";
import { MemoList } from "../components";

class MemoListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          name="plus"
          onPress={() => this.props.navigation.navigate("MemoEdit")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fffdf6",
  },
});

export default MemoListScreen;
