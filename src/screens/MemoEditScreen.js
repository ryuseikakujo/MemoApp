import React, { Component } from "react";
import { StyleSheet, KeyboardAvoidingView, TextInput } from "react-native";
import { CircleButton } from "../elements";
import firebase from "firebase";

class MemoEditScreen extends Component {
  state = {
    body: "",
    key: "",
  };

  componentDidMount() {
    // console.log(this.props.navigation.state.params);
    const { params } = this.props.navigation.state;
    this.setState({ body: params.memo.body, key: params.memo.key });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .doc(this.state.key)
      .update({
        body: this.state.body,
      })
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch((error) => console.log(error));
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
          onChangeText={(text) => {
            this.setState({ body: text });
          }}
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

export default MemoEditScreen;
