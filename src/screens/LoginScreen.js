import React, { Component } from "react";
import firebase from "firebase";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(() => {});
  }

  handlePress() {
    this.props.navigation.navigate("Signup");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#c70f66"
          onPress={this.handleSubmit.bind(this)}
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.signup}
          onPress={this.handlePress.bind(this)}
        >
          <Text style={styles.signupText}>メンバー登録をする</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  button: {
    backgroundColor: "#e31676",
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 18,
  },
  signup: {
    marginTop: 16,
    alignSelf: "center",
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;
