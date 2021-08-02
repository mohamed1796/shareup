import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles.js";

export default function AppTextInput({
  icon,
  width = "100%",
  centerText = false,
  ...otherProps
}) {
  return (
    <View style={[defaultStyles.inputContainer, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={defaultStyles.inputIcon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[
          defaultStyles.text,
          { width: "100%", textAlign: centerText ? "center" : "auto" },
        ]}
        {...otherProps}
      />
    </View>
  );
}