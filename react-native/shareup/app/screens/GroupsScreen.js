import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import TextField from "../components/TextField";
import Tab from "../components/buttons/Tab";
import Text from "../components/Text";
import colors from "../config/colors";
import FancyAddButton from "../components/buttons/FancyAddButton";
import GroupCard from "../components/lists/GroupCard";
import defaultStyles from "../config/styles";
import ListHeader from "../components/lists/ListHeader";

const groups = [
  {
    id: 1,
    title: "Football",
    image: require("../assets/images/stadium.png"),
  },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export default function GroupsScreen() {
  return (
    <Screen style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Icon name="chevron-back" type="Ionicons" size={50} />

        <TextField
          placeholder="search Groups"
          iconName="search1"
          iconType="AntDesign"
          style={styles.searchbar}
        />
      </View>

      <View style={styles.optionsbar}>
        <Tab
          title="Create New"
          style={styles.tab}
          iconName="pluscircle"
          iconType="AntDesign"
          iconColor="black"
        />
        <Tab
          title="Your groups"
          style={styles.tab}
          iconImage={require("../assets/icons/foundation_social-skillshare.png")}
        />
        <Tab
          title="Categories"
          style={styles.tab}
          iconName="list"
          iconType="Feather"
        />
      </View>

      <View style={styles.groups}>
        <Text>Your Groups</Text>

        <View style={styles.addGroupsContainer}>
          <FancyAddButton style={styles.fancyAddButton} />
          <Text style={styles.smallerFont}>Add more groups...</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <FlatList
        contentContainerStyle={styles.groupsList}
        ListHeaderComponent={() => (
          <ListHeader
            title="There no activity yet !"
            subtitle="Join new Groups to know more about them"
          />
        )}
        data={groups}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <GroupCard
            style={styles.groupCard}
            title={item.title}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchbar: {
    width: "85%",
  },
  searchText: {
    width: "75%",
  },
  optionsbar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    width: "31%",
    marginHorizontal: 2.5,
    marginTop: 5,
  },
  groups: {
    margin: 15,
  },
  addGroupsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  fancyAddButton: {
    margin: 5,
  },
  smallerFont: {
    marginLeft: 20,
    fontSize: 15,
  },
  separator: {
    backgroundColor: colors.LightGray,
    width: "100%",
    height: 10,
  },
  groupsContainer: {
    paddingTop: 30,
    justifyContent: "center",
  },
  groupsList: {
    paddingTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  groupCard: {
    margin: 5,
  },
});
