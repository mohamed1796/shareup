import React from "react";
import { View, StyleSheet } from "react-native";

import Icon from "../Icon";
import colors from "../../config/colors";

export default function FancyAddButton({ style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.frontShade}></View>
      <View style={styles.backShade}>
        <Icon
          name="pluscircle"
          type="AntDesign"
          size={30}
          color={colors.iondigoDye}
          backgroundSizeRatio={1}
          style={styles.addIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  backShade: {
    backgroundColor: colors.lighterGray,
    width: 100,
    height: 100,
    borderRadius: 15,
    position: "absolute",
    marginLeft: 10,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  frontShade: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.LightGray,
    width: 100,
    height: 100,
    borderRadius: 15,
    position: "absolute",
  },
  addIcon: {
    position: "absolute",
  },
});
