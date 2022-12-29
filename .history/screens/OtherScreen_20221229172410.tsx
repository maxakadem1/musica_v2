import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface Props {
  navigation: NavigationStackProp<{}>;
}

export default function OtherScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Other Screen</Text>
      <Button
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
