import { StyleSheet, TextInput, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../components/Icon";
import React from "react";
import defaultStyles from "../config/styles";

export default function LoginScreen({
  placeholder,
  value,
  iconName,
  icontype,
  iconColor,
  iconSize = 40,
  backgroundColor,
  iconBackgroundColor = backgroundColor,
  width = "100%",
  height = 30,
}) {
  return (
    <View style={[styles.container, { backgroundColor, width, height }]}>
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={styles.icon}
        type={icontype}
        backgroundColor={iconBackgroundColor}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "floralwhite",
    width: "80%",
    padding: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    borderRadius: 50,
  },
  image: {
    width: 300,
    height: 300,
  },
  textInput: {
    fontSize: 16,
    marginLeft: 10,
  },
});
