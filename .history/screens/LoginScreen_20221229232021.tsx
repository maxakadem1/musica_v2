import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import styles from "../constants/Styles";

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Send a request to your server to authenticate the user

    // Navigate to the Home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
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
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
