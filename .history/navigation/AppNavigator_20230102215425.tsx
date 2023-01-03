import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const AppStackNavigator = createAppContainer(
  createSwitchNavigator({
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  })
);

export default AppStackNavigator;
