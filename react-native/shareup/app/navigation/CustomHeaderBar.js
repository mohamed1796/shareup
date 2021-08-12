import React from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/buttons/IconButton";
import Icon from "../components/Icon";
import colors from "../config/colors";
import Constants from "expo-constants";

export default function CustomHeaderBar() {
  const size = 30;
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Icon image={require("../assets/main-logo.png")} />
      </View>
      <View style={styles.headerRight}>
        <IconButton
          style={styles.iconButton}
          image={require("../assets/tab-navigation-icons/aperture-icon.png")}
          size={size}
        />
        <IconButton
          style={styles.iconButton}
          image={require("../assets/tab-navigation-icons/share-icon.png")}
          size={size}
        />
        <IconButton
          style={styles.iconButton}
          image={require("../assets/tab-navigation-icons/user-icon.png")}
          size={size}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 10,
    padding: 15,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  headerRight: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 10,
  },
});
