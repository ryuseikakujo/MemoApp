import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { CircleButton } from "../elements";
import firebase from "firebase";

class MemoCreateScreen extends Component {
  state = {
    body: "",
  };

  handlePress() {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.uid}/memos`)
      .add({
        body: this.state.body,
        createdOn: new Date(),
      })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
        keyboardVerticalOffset={80}
      >
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => this.setState({ body: text })}
        />
        <CircleButton
          name="check"
          onPress={this.handlePress.bind(this)}
        ></CircleButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
