import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import TextField from "../components/TextField";
import colors from "../config/colors";

export default function GroupsScreen() {
  return (
    <Screen style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Icon name="chevron-back" type="Ionicons" size={50} />
        <View style={styles.searchbar}>
          <Icon
            name="search1"
            type="AntDesign"
            size={40}
            color={colors.dimGray}
            backgroundColor={colors.lighterGray}
          />
          <TextInput
            placeholder="Search Groups"
            placeholderTextColor={colors.dimGray}
            style={styles.searchText}
          />
        </View>
      </View>

      <View style={styles.optionsbar}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lighterGray,
    height: 40,
    borderRadius: 40,
  },
  searchText: {
    width: "75%",
  },
  optionsbar: {
    // backgroundColor: "red",
  },
});
