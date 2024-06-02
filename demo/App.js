import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Demo from "./src/Demo";

function App() {
  const [value, setValue] = useState("Hello, World!");
  return (
    <View style={styles.container}>
      <Demo value={value} setValue={setValue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
