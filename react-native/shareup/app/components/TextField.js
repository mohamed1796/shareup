/**
 *
 * This is less customizable Text input
 */

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../components/Icon";
import defaultStyles from "../config/styles.js";
import colors from "../config/colors.js";

export default function AppTextField({
  iconName,
  iconType,
  iconImage,
  width = "100%",
  height = 40,
  centerText = false,
  backgroundColor = colors.lighterGray,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width, height, backgroundColor }, style]}>
      {iconName && (
        <Icon
          name={iconName}
          type={iconType}
          image={iconImage}
          size={40}
          color={colors.dimGray}
          backgroundColor={backgroundColor}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.dimGray}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    width: "80%",
    color: colors.dark,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
  },
});
