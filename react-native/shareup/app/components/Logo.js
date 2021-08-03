import { Dimensions, Image, StyleSheet } from "react-native";

import React from "react";

const renderImage = (mainLogo, style) => {
  if (mainLogo == true)
    return (
      <Image
        style={[styles.logo, style]}
        source={require("../assets/logo.png")}
      />
    );
  else
    return (
      <Image
        style={[styles.secondrylogo, style]}
        source={require("../assets/secondry-logo.png")}
      />
    );
};

export default function Logo({ mainLogo, style }) {
  return renderImage(mainLogo, style);
}

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.25,
    alignSelf: "center",
    marginBottom: 20,
  },
  secondrylogo: {
    width: 100,
    height: 100,
  },
});
