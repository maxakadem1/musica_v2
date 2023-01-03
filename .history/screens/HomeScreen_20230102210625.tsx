import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import LoginButton from "../components/LoginButton";
import styles from "../constants/Styles";

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <LoginButton
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Other")}
      />
      <LoginButton
        title="Back to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
