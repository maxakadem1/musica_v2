import React, { useState } from "react";

import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import styles from "../constants/Styles";
import { TextInput } from "react-native-gesture-handler";
import LoginButton from "../components/LoginButton";

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default function OtherScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Other Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
    </View>
  );
}
