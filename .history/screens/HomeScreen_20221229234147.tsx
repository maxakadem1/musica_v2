import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import CustomButton from "../components/LoginButton";
import styles from "../constants/Styles";

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Other")}
      />
      <CustomButton
        title="Back to Login Screen"
        onPress={() => navigation.navigate("Login")}
      />
      <CustomButton
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Other")}
      />
    </View>
  );
}
