import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import styles from "../constants/Styles";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";

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

  const handleRegister = async () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.headerText}>MUSICA</Text>
      <View style={styles.loginInputs}>
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
        <LoginButton title="login" onPress={handleLogin} />
        <RegisterButton title="register" onPress={handleRegister} />
      </View>
    </View>
  );
}
