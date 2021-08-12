import React, { useContext, useState, useRef } from "react";
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
import UserContext from "../UserContext";
import Button from "../components/buttons/LinkButton";
import IconButton from "../components/buttons/IconButton";
import PostService from "../services/PostService";
import routes from "../navigation/routes";
import useImagePicker from "../hooks/useImagePicker";

export default function AddPostScreen({ navigation }) {
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const { file, pickImage, clearFile } = useImagePicker();
  const [displayeImage, setDisplayeImage] = useState(false);
  // const [postContent, setPostContent] = useState({});
  // const [files, setFiles] = useState();
  // const [postText, setPostText] = useState("");

  const textInputRef = useRef();

  const items = [
    {
      title: "Photos",
      icon: { name: "image", type: "Feather" },
      onPress: () => {
        setDisplayeImage(true);
        pickImage();
      },
    },
    {
      title: "Tag People",
      icon: { name: "tagso", type: "AntDesign" },
      onPress: () => {
        console.log("Tag People");
      },
    },
    {
      title: "Sell and Share",
      icon: { name: "upload", type: "AntDesign" },
      onPress: () => {
        console.log("Sell and Share");
      },
    },
    {
      title: "Feeling/Activity",
      icon: { name: "smiley", type: "Fontisto" },
      onPress: () => {
        console.log("Feeling/Activity");
      },
    },
    {
      title: "Location",
      icon: { name: "md-location-outline", type: "Ionicons" },
      onPress: () => {
        console.log("Location");
      },
    },
    {
      title: "Live",
      icon: { name: "image", type: "Feather" },
      onPress: () => {
        console.log("Live");
      },
    },
  ];

  const handleonChangeText = (text) => {
    setText(text);
  };

  const handleAddPost = async () => {
    if (text === "" && Object.keys(file).length === 0) {
      setError("Can't Create empty post");
    }

    console.log(file.uri);
    const postContent = {
      text: text,
      image: file.uri,
    };

    await PostService.createPost(user.id, postContent);

    navigation.navigate(routes.FEED);
    setText("");
    clearFile();
    setDisplayeImage(false);
    textInputRef.current.clear();
  };

  return (
    <Screen style={styles.container}>
      {/** Header */}
      <View style={styles.header}>
        <IconButton
          style={styles.botton}
          onPress={() => navigation.navigate(routes.FEED)}
          IconComponent={
            <Icon
              name="close"
              color={colors.dimGray}
              type="AntDesign"
              backgroundColor={colors.white}
            />
          }
        />
        <Text style={styles.headerTitle}>Create Post</Text>
        <Button onPress={handleAddPost} title="Post" style={styles.botton} />
      </View>
      <View style={styles.topContainer}>
        {/** User */}
        <View style={styles.row}>
          <Image
            source={require("../assets/default-profile-picture.png")}
            style={defaultStyles.circledProfilePicture}
          />
          <View style={styles.column}>
            <Text style={styles.userName}>
              {user.firstName} {user.lastName}
            </Text>
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
          style={styles.textInput}
          numberOfLines={10}
          multiline={true}
          onChangeText={handleonChangeText}
          ref={textInputRef}
        />

        {displayeImage && (
          <Image source={{ uri: file.uri }} style={styles.image} />
        )}
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
              onPress={item.onPress}
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
  header: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    height: 60,
    width: "100%",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  botton: { color: colors.dimGray },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
    flex: 0.4,
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
  textInput: { height: "8%", textAlignVertical: "top" },
  image: {
    width: "100%",
    height: 400,
  },
});
