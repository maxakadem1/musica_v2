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

  const handleRegister = async () => {
    // Send a request to your server to authenticate the user

    // Navigate to the Home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.text}>Register Screen</Text>
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
        <LoginButton title="register" onPress={handleRegister} />
      </View>
    </View>
  );
}
