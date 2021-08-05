import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import colors from "../config/colors";

export default function Screen({ children, style, statusPadding = true }) {
  return (
    <View
      style={[
        styles.view,
        { paddingTop: statusPadding ? Constants.statusBarHeight : 0 },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 0,
    // paddingTop: Constants.statusBarHeight,
    // to add a top padding same as the hight of the statusbar hight of any device
    // and it will not add extra padding with SafeAreaView in ios
    flex: 1,
  },
  view: {
    padding: 0,
    flex: 1,
    backgroundColor: colors.white,
  },
});
