import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import TextField from "../components/TextField";
import Tab from "../components/buttons/Tab";
import Separator from "../components/Separator";
import ListItem from "../components/lists/ListItem";
import defaultStyles from "../config/styles";
import ListHeader from "../components/lists/ListHeader";
import colors from "../config/colors";

const friends = [
  {
    id: 1,
    name: "Share up Team",
    subTitle: "Recommended",
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    name: "Name",
    subTitle: "Recommended",
    image: require("../assets/default-profile-picture.png"),
  },
  {
    id: 3,
    name: "Name",
    subTitle: "Recommended",
    image: require("../assets/default-profile-picture.png"),
  },
  {
    id: 4,
    name: "Name",
    subTitle: "Recommended",
    image: require("../assets/default-profile-picture.png"),
  },
  {
    id: 5,
    name: "Name",
    subTitle: "Recommended",
    image: require("../assets/default-profile-picture.png"),
  },
  {
    id: 6,
    name: "Name",
    subTitle: "Recommended",
    image: require("../assets/default-profile-picture.png"),
  },
  {
    id: 7,
    name: "Name",
    subTitle: "Recommended",
    image: require("../assets/default-profile-picture.png"),
  },
];

export default function GroupsScreen(props) {
  return (
    <Screen style={styles.container} statusPadding={false}>
      <View style={styles.header}>
        <TextField
          placeholder="search Groups"
          iconName="search1"
          iconType="AntDesign"
          style={styles.searchbar}
        />

        <View style={styles.tabs}>
          <Tab title="Requests" style={styles.tab} />
          <Tab title="All Friends" />
        </View>
      </View>

      <Separator style={styles.separator} />

      <FlatList
        contentContainerStyle={styles.groupsList}
        ListHeaderComponent={() => (
          <ListHeader
            title="There no activity yet !"
            subtitle="Add new friends to know more about them"
          />
        )}
        data={friends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.name}
            subTitle={item.subTitle}
            style={[styles.listItem, defaultStyles.lightShadow]}
            displayLeft={true}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  header: {
    paddingHorizontal: 20,
  },
  tabs: {
    flexDirection: "row",
  },
  searchbar: {
    marginBottom: 10,
  },
  tab: {
    marginRight: 10,
  },
  separator: {
    backgroundColor: colors.LightGray,
    marginTop: 20,
  },
  listItem: {
    marginBottom: 13,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});
