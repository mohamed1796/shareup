import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export default function LoginScreen({
  placeholder,
  value,
  iconName,
  iconColor,
}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={24}
        color={iconColor}
        style={styles.icon}
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
    margin: 10,
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
