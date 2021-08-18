import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Icon from "../Icon";
import colors from "../../config/colors";

export default function StoryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon
          image={require("../../assets/icons/user-icon.png")}
          backgroundColor={colors.grayX11Gray}
          size={35}
        />
      </View>
      <Icon
        name="pluscircle"
        type="AntDesign"
        size={25}
        color={colors.iondigoDye}
        backgroundSizeRatio={0.85}
        style={styles.addIcon}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.text}>Create</Text>
        <Text style={styles.text}>Story</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 71,
    height: 113,
    borderWidth: 1.5,
    borderColor: colors.lighterGray,
    borderRadius: 15,
    margin: 15,
    overflow: "hidden",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grayX11Gray,
    height: "60%",
  },
  textWrapper: {
    justifyContent: "center",
    alignItems: "center",
    top: -8,
  },
  text: {
    fontSize: 9,
  },
  addIcon: {
    alignSelf: "center",
    top: -5,
  },
});
