import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Button } from "react-native";
import styles from "./constants/Styles";
import React from "react";
import { Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
