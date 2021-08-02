import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function Separator({ text, style }) {
  const inside = () => {
    if (text)
      return (
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>{text}</Text>
        </View>
      );
    else return <View></View>;
  };

  return (
    <View style={[styles.outer, style]}>
      <View style={styles.inner} />
      {inside()}
      <View style={styles.inner} />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inner: {
    flex: 1,
    height: 1,
    backgroundColor: colors.medium,
  },
});
