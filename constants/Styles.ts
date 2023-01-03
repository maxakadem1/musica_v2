import { cloneElement } from "react";
import { StyleSheet } from "react-native";

export const colors = {
  primary: "yellow",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
};

export const fonts = {
  large: 24,
  medium: 18,
  small: 14,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272838",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#272838",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 15,
  },
  registerButton:
  {
    backgroundColor: colors.secondary,
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  loginText: {
    color: "#000",
    fontSize: fonts.medium,
    textAlign: "center"
  },
  registerText: {
    color: "#fff",
    fontSize: fonts.medium,
    textAlign: "center"
  },
  text: {
    color: colors.secondary,
    fontSize: fonts.large,
  },
  headerText: {
    color: colors.primary,
    fontSize: fonts.large,
    marginBottom: 20,
    fontFamily: "sans-serif-condensed",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 15
  },
});
