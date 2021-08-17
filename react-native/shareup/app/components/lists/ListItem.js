import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../Text";
import Tab from "../buttons/Tab";
import Icon from "../Icon";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  style,
  displayLeft = false,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.listItem, style]}>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          {subTitle && (
            <AppText numberOfLines={2} style={styles.subTitle}>
              {subTitle}
            </AppText>
          )}
        </View>

        {displayLeft && (
          <View style={styles.leftContainer}>
            <Tab title="Send Request" style={styles.tab} />
            <Icon
              name="close"
              type="AntDesign"
              backgroundSizeRatio={1}
              size={15}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  detailsContainer: { marginLeft: 10, flex: 1 },
  image: { height: 50, width: 50, borderRadius: 35 },
  title: {
    fontSize: 18,
    marginBottom: 3,
    color: colors.dark,
    fontWeight: "500",
  },
  subTitle: { fontSize: 12, color: colors.dimGray },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    borderRadius: 7,
    paddingHorizontal: 5,
    marginRight: 6,
  },
});
