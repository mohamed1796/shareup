import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
// import { Image } from "react-native-expo-image-cache"; // an image component that can be cached

import colors from "../../config/colors";
import settings from "../../config/settings";
import Text from "../Text";
import Separator from "../Separator";
import defaultStyles from "../../config/styles";

export default function Card({
  firstName,
  lastName,
  date,
  postText,
  imageURL,
  profileImage,
  onPress,
  nomberOfComments,
  nomberOfShares,
  style,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, style]}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: settings.apiUrl + profileImage }}
            style={defaultStyles.circledProfilePicture}
          />
          <View>
            <Text>
              {firstName} {lastName}
            </Text>
            <Text style={styles.postDate}>{date}</Text>
          </View>
        </View>

        <View style={styles.content}>
          {postText !== "" && <Text style={styles.postText}>{postText}</Text>}

          {imageURL && (
            <Image
              source={{ uri: settings.apiUrl + imageURL }}
              style={styles.image}
            />
          )}
        </View>

        <Separator style={styles.separator} />

        <View style={styles.footer}>
          <Text>
            Comments:{nomberOfComments} Shares:{nomberOfShares}{" "}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    borderColor: colors.grayX11Gray,
    borderWidth: 1,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    padding: 5,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    marginBottom: 7,
  },
  userInfo: {
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  content: {
    justifyContent: "center",
  },
  postDate: {
    fontSize: 16,
    color: colors.dimGray,
  },
  separator: {
    marginVertical: 10,
  },
  postText: {
    fontSize: 25,
  },
});
