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
    <TouchableWithoutFeedback onPress={onPress} style={styles.shadow}>
      <View style={[styles.card, style]}>
        <View style={styles.header}>
          <Image
            source={{ uri: settings.apiUrl + profileImage }}
            style={styles.profileImage}
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
    // backgroundColor
    // backgroundColor: colors.white,
    borderColor: colors.light,
    marginBottom: 20,
    overflow: "hidden",
    padding: 20,
    elevation: 2,
  },
  shadow: {
    padding: 20,
    shadowColor: colors.medium,
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    marginBottom: 7,
  },
  header: {
    paddingBottom: 30,
    display: "flex",
    flexDirection: "row",
  },
  content: {
    justifyContent: "center",
  },
  postDate: {
    fontSize: 16,
    color: colors.medium,
  },
  separator: {
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  postText: {
    fontSize: 25,
  },
});
