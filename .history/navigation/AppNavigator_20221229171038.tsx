import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import OtherScreen from "../screens/OtherScreen";

const AppStackNavigator = createAppContainer(
  createSwitchNavigator({
    Home: {
      screen: HomeScreen,
    },
    Other: {
      screen: OtherScreen,
    },
  })
);

export default AppStackNavigator;
