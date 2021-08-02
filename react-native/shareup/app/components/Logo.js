import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo(params) {
  return <Image style={styles.logo} source={require("../assets/logo.png")} />;
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 250,
    alignSelf: "center",
    marginBottom: 20,
  },
});
