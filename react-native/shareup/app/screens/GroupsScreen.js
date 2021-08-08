import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

export default function GroupsScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text>Groups Screen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
