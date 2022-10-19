import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import Login from "./src/screens/authScreens/Login";
import SignUpscreen from "./src/screens/authScreens/SignUpscreen";
import MainScreen from "./src/screens/authScreens/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barstyle="light-content" backgroundColor={colors.statusbar} />
      {/* <SignUpscreen /> */}
      {/* <Login /> */}
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
