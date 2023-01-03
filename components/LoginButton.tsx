import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../constants/Styles";

interface Props {
  onPress: () => void;
  title: string;
}

const LoginButton: React.FC<Props> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.loginButton}>
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
