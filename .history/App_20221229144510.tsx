import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { Button } from "react-native";
import styles from "./constants/Styles";
import React from "react";
import { Text, View } from "react-native";

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>poopie poopss</Text>
        <Button
          title="button text"
          onPress={() => console.log("Button pressed!")}
          style={styles.button}
        ></Button>

        {/* makes status bar color different */}
        <StatusBar style="auto" />
      </View>
    );
  }
}
