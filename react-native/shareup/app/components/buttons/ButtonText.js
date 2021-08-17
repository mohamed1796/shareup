import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default function ButtonText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
