import React, { Component, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CircleButton } from "../elements";

const dateString = (date) => {
  if (date == null) {
    return "";
  }
  const str = date.toDate().toISOString();
  return str.split("T")[0] + "  " + str.split("T")[1].split(".")[0];
};

class MemoDetailScreen extends Component {
  state = {
    memo: {},
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  returnMemo(memo) {
    this.setState({ memo });
  }

  render() {
    const { memo } = this.state;
    // if (memo == null) {
    //   return null;
    // }

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>
                {memo.body
                  ? memo.body.length > 40
                    ? memo.body.substring(0, 40) + "..."
                    : memo.body
                  : null}
              </Text>
              <Text style={styles.memoHeaderDate}>
                {dateString(memo.createdOn)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text style={styles.memoBody}>{memo.body}</Text>
        </View>

        <CircleButton
          name="pencil"
          color="white"
          style={styles.editButton}
          onPress={() =>
            this.props.navigation.navigate("MemoEdit", {
              memo,
              returnMemo: this.returnMemo.bind(this),
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313c",
    justifyContent: "center",
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "white",
    flex: 1,
  },
  memoBody: {
    lineHeight: 22,
    fontSize: 15,
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
