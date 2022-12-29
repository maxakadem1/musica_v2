import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { Button } from "react-native";
import styles from "./constants/Styles";
import React from "react";
import { Text, View } from "react-native";

// THIS VERSION OF APP.TSX IS THE ORIGINAL VERSION. UNCOMMENT FOR MULTIPLE PAGE APP
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

// THIS VERSION OF APP.TSX IS THE VERSION FOR A SINGLE PAGE APP I MADE FOR TESTING
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>blank application</Text>
        <Button
          title="button text goes here"
          onPress={() => console.log("Button pressed!")}
        ></Button>

        {/* makes status bar color different */}
        <StatusBar style="auto" />
      </View>
    );
  }
}
