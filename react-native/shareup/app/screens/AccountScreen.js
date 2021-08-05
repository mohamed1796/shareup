import React from "react";
import { StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

export default function AccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text>Account Screen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
