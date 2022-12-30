import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import OtherScreen from "../screens/OtherScreen";
import LoginScreen from "../screens/LoginScreen";

const AppStackNavigator = createAppContainer(
  createSwitchNavigator({
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Other: {
      screen: OtherScreen,
    },
  })
);

export default AppStackNavigator;
