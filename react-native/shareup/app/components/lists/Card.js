import React, { useState, useEffect } from "react";
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
import defaultStyles from "../../config/styles";
import Tab from "../buttons/Tab";
import Icon from "../Icon";

export default function Card({
  firstName,
  lastName,
  date,
  postText,
  imageURL,
  profileImage,
  onPress,
  style,
}) {
  const [formattedDate, setFormattedDate] = useState({
    day: "",
    month: "",
    year: "",
    time: "",
  });

  const formateDate = () => {
    const arrDate = date.split(" ");
    const monthShort = arrDate[1].slice(0, 3);
    setFormattedDate({
      day: arrDate[0],
      month: monthShort,
      year: arrDate[2],
      time: arrDate[3],
    });
  };

  useEffect(() => {
    formateDate();
  }, []);

  const actionsTabSizeRatio = 0.5;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, defaultStyles.cardBorder, style]}>
        {/** Post Image */}
        {imageURL && (
          <Image
            source={{ uri: settings.apiUrl + imageURL }}
            style={styles.image}
          />
        )}

        <View style={styles.content}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: settings.apiUrl + profileImage }}
              style={styles.profilePicture}
            />

            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>{firstName}</Text>
              <Text style={styles.postDate}>
                on {formattedDate.day} {formattedDate.month}{" "}
                {formattedDate.year}{" "}
              </Text>
            </View>

            <View style={styles.actionsContainer}>
              <Tab
                title="5.2K"
                iconName="star"
                iconType="FontAwesome5"
                sizeRatio={actionsTabSizeRatio}
                style={styles.actionTab}
                color={colors.mediumGray}
                fontColor={colors.white}
              />

              <Tab
                title="5.2K"
                iconName="comment"
                iconType="Octicons"
                sizeRatio={actionsTabSizeRatio}
                style={styles.actionTab}
                color={colors.mediumGray}
                fontColor={colors.white}
              />

              <Tab
                title="5.2K"
                iconImage={require("../../assets/icons/share-icon.png")}
                sizeRatio={actionsTabSizeRatio}
                style={styles.actionTab}
                color={colors.mediumGray}
                fontColor={colors.white}
                iconSize={10}
              />
            </View>
          </View>

          <View style={styles.actionsBar}>
            <View style={styles.likes}>
              <Icon
                name="star"
                type="FontAwesome"
                size={14}
                color="#FFC107"
                backgroundSizeRatio={1}
                style={styles.star}
              />
              <Text style={styles.actionsText}>27</Text>
            </View>
            <View style={styles.commentsShares}>
              <Text style={[styles.actionsText, styles.comments]}>
                27 Comments
              </Text>
              <Text style={styles.actionsText}>4 Shares</Text>
            </View>
          </View>

          {postText !== "" && <Text style={styles.postText}>{postText}</Text>}

          <Icon
            name="options"
            type="SimpleLineIcons"
            style={styles.optionsIcon}
            size={22}
            backgroundSizeRatio={1}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const borderRadius = 10;
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginTop: 10,
    overflow: "hidden",
    padding: 7,
    paddingHorizontal: 6,
  },
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  profilePicture: {
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: "red",
    width: 50,
    height: 50,
    // margin: 5,
  },
  subtitle: {},
  userInfo: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    justifyContent: "center",
    padding: 10,
  },
  postDate: {
    fontSize: 12,
    color: colors.dimGray,
  },
  separator: {
    marginVertical: 10,
  },
  postText: {
    fontSize: 11,
    marginTop: 10,
  },
  userName: {
    fontWeight: "bold",
  },
  userNameContainer: {
    width: "40%",
  },
  actionsContainer: {
    flexDirection: "row",
    width: "42%",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  actionTab: {
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  actionsBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  commentsShares: {
    flexDirection: "row",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionsText: {
    fontSize: 12,
    fontWeight: "600",
    // paddingRight: 10,
  },
  star: {
    marginRight: 5,
  },
  comments: {
    marginRight: 10,
  },
  optionsIcon: {
    alignSelf: "flex-end",
    top: 8,
  },
});
