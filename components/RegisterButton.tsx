import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styles from "../constants/Styles";

interface Props {
  onPress: () => void;
  title: string;
}

const RegisterButton: React.FC<Props> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.registerButton}>
      <Text style={styles.registerText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RegisterButton;
