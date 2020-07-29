import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import firebase from "firebase";
import {
  MemoListScreen,
  SignupScreen,
  MemoDetailScreen,
  MemoEditScreen,
  MemoCreateScreen,
  LoginScreen,
} from "./src/screens";

import ENV from "./env.json";

require("firebase/firestore");

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    MemoCreate: { screen: MemoCreateScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Memot",
      headerTintColor: "white",
      headerBackTitle: null,
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "#265366",
        // ...Platform.select({
        //   android: {
        //     height: 80,
        //     paddingTop: 20,
        //   },
        // }),
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

export default createAppContainer(App);
