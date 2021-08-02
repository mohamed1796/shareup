import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default function RoundedButton() {
  return (
    <TouchableOpacity
    // style={[styles.button, { backgroundColor: color }]} //wrap the button inside a container to modify the width
    // onPress={onPress}
    >
      <Image source={require("../../assets/google-icon.png")} />
    </TouchableOpacity>
  );
}
// const styles = StyleSheet.create({
//   container: {},
// });
