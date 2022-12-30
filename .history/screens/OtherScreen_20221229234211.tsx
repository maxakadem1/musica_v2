import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import styles from "../constants/Styles";
import CustomButton from "../components/LoginButton";

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default function OtherScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Other Screen</Text>
      <CustomButton
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Home")}
      />
      <CustomButton
        title="Back to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
