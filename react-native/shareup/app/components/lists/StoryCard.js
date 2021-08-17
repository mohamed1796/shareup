import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Icon from "../Icon";
import colors from "../../config/colors";

export default function StoryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          source={require("../../assets/default-profile-picture.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 71,
    height: 113,
    borderWidth: 1.5,
    // borderColor: colors.lighterGray,
    borderRadius: 15,
    margin: 15,
  },
  iconWrapper: {
    width: "100%",
    height: "70%",
    // backgroundColor: colors.grayX11Gray,
  },
});
