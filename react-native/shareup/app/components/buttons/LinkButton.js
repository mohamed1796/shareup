import React from "react";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../../config/colors";

export default function Button({ title, fontSize = 20, style }) {
  return (
    <TouchableWithoutFeedback>
      <Text style={[styles.text, { fontSize: fontSize }, style]}>{title}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
  },
});
