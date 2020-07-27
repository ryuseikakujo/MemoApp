import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  MemoListScreen,
  SignupScreen,
  MemoDetailScreen,
  MemoEditScreen,
  LoginScreen,
} from "./src/screens";

const App = createStackNavigator(
  {
    Home: { screen: MemoListScreen },
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Memot",
      headerStyle: {
        backgroundColor: "#265366",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

export default createAppContainer(App);
