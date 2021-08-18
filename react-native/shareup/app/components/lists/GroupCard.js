import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

import colors from "../../config/colors";
import defaultStyle from "../../config/styles";

const width = Dimensions.get("window").width / 2 - 15;
const height = Dimensions.get("window").height / 3;

export default function GroupCard({ style, image, title }) {
  return (
    <View style={[defaultStyle.cardBorder, style]}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image
          source={require("../../assets/images/group-texture.png")}
          style={styles.image}
        />
      )}
      <Text style={[styles.title, defaultStyle.titleFontSize]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: colors.LightGray,
    borderRadius: 10,
  },
  image: {
    width: width,
    height: height,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    zIndex: 1,
    position: "absolute",
    color: "black",
    bottom: 1,
    margin: 7,
    color: colors.white,
  },
});
