import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import StoryCard from "./lists/StoryCard";
import colors from "../config/colors";
import Icon from "../components/Icon";
import LinkButton from "../components/buttons/LinkButton";
import Tab from "../components/buttons/Tab";
import JoinGroupList from "./lists/JoinGroupList";

export default function FeedTop() {
  return (
    <View style={styles.container}>
      <StoryCard />

      <View style={styles.shareWrapper}>
        <Icon image={require("../assets/default-profile-picture.png")} />
        <LinkButton
          title="We share, Do you? "
          fontSize={12}
          style={styles.shareButton}
        />
      </View>

      <View style={styles.tabsWrapper}>
        <Tab
          title="Hang Share"
          color={colors.white}
          width="30%"
          titleStyle={styles.tabsTitle}
          sizeRatio={0.99}
        />
        <View style={styles.verticalLine} />
        <Tab
          title="Share Up"
          color={colors.white}
          iconImage={require("../assets/icons/share-2-icon.png")}
          width="30%"
          iconSize={20}
        />
        <View style={styles.verticalLine} />
        <Tab
          title="Swap"
          color={colors.white}
          width="30%"
          iconImage={require("../assets/icons/swap-icon.png")}
          iconSize={15}
        />
      </View>

      <View style={styles.suggestedGroupsWrapper}>
        <Text style={styles.suggestedGroupsText}>Suggested Groups</Text>

        <JoinGroupList />

        {/* <GroupJoinCard /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  shareWrapper: {
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.LightGray,
    alignItems: "center",
  },
  shareButton: {
    color: colors.mediumGray,
    marginLeft: 10,
  },

  tabsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1.5,
    borderColor: colors.LightGray,
  },
  verticalLine: {
    height: 25,
    width: 1.5,
    backgroundColor: colors.LightGray,
  },
  tabsTitle: {
    fontWeight: "500",
  },
  suggestedGroupsWrapper: {
    marginHorizontal: 15,
  },
  suggestedGroupsText: {
    color: colors.mediumGray,
  },
});
