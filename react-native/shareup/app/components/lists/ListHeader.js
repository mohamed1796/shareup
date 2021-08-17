import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../Text";
import defaultStyles from "../../config/styles";

export default function ListHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, defaultStyles.titleFontSize]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
  },
  subtitle: {},
  container: {
    justifyContent: "center",
    alignItems: "center",

    marginVertical: 20,
  },
});
