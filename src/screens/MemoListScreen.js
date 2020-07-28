import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { CircleButton } from "../elements";
import { MemoList } from "../components";
import firebase from "firebase";

class MemoListScreen extends Component {
  state = {
    memoList: [],
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push(doc.data());
        });
        // this.setState({memoList: memoList})
        this.setState({ memoList });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePress() {
    this.props.navigation.navigate("MemoCreate");
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList
          memoList={this.state.memoList}
          navigation={this.props.navigation}
        />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
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
