import React from "react";
import { StyleSheet, View, Image, TextInput, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import Text from "../components/Text";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const items = [
  {
    title: "Photos",
    icon: { name: "image", type: "Feather" },
  },
  {
    title: "Tag People",
    icon: { name: "tagso", type: "AntDesign" },
  },
  {
    title: "Sell and Share",
    icon: { name: "upload", type: "AntDesign" },
  },
  {
    title: "Feeling/Activity",
    icon: { name: "smiley", type: "Fontisto" },
  },
  {
    title: "Location",
    icon: { name: "md-location-outline", type: "Ionicons" },
  },
  {
    title: "Live",
    icon: { name: "image", type: "Feather" },
  },
];

export default function AddPostScreen(props) {
  return (
    <Screen style={styles.container} statusPadding={false}>
      <View style={styles.topContainer}>
        {/** Header */}
        <View style={styles.row}>
          <Image
            source={require("../assets/default-profile-picture.png")}
            style={defaultStyles.circledProfilePicture}
          />
          <View style={styles.column}>
            <Text style={styles.userName}>New user</Text>
            <View style={styles.row}>
              <View style={[styles.headerTab, styles.row]}>
                <FontAwesome5
                  name="user-friends"
                  size={15}
                  color={colors.dimGray}
                />
                <Text style={styles.headerTabText}>Friends</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={15}
                  color={colors.dimGray}
                />
              </View>

              <View style={[styles.headerTab, styles.row]}>
                <MaterialCommunityIcons
                  name="plus"
                  size={15}
                  color={colors.dimGray}
                />
                <Text style={styles.headerTabText}>Albums</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={15}
                  color={colors.dimGray}
                />
              </View>
            </View>
          </View>
        </View>

        {/**Content */}
        <TextInput
          placeholder="We Share, Do you?"
          placeholderTextColor={colors.dimGray}
          style={{ height: "80%", textAlignVertical: "top" }}
          numberOfLines={10}
          multiline={true}
        />
      </View>

      <View style={[styles.tempModal, styles.topBorderRadius]}>
        <FlatList
          style={styles.topBorderRadius}
          data={items}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              style={styles.topBorderRadius}
              title={item.title}
              // onPress={() => navigation.navigate(item.screen)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  type={item.icon.type}
                  color={colors.dimGray}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      {/* 
      <Modal
        isVisible={true}
        // onSwipeComplete={handleCancel}
        swipeDirection={["up", "left", "right", "down"]}
        style={styles.modal}
        coverScreen={true}
        // onBackdropPress={handleCancel}
        // onBackButtonPress={handleCancel}
      >
        <View style={styles.modalView}></View>
      </Modal> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    // flex: 1,
  },
  topContainer: {
    padding: 10,
    flex: 1,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  userName: {
    fontWeight: "bold",
  },
  headerTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.dimGray,
    margin: 5,
    borderRadius: 5,
    padding: 2,
  },
  headerTabText: {
    fontSize: 14,
    color: colors.dimGray,
    marginHorizontal: 5,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalView: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 0.5,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  tempModal: {
    marginTop: 10,
    flex: 0.5,
    height: "100%",
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,
    elevation: 24,
  },
  topBorderRadius: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
