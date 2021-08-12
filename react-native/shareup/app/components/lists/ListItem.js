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

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  style,
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
  image: { height: 70, width: 70, borderRadius: 35 },
  title: {
    fontSize: 18,
    marginBottom: 3,
    color: colors.dark,
    fontWeight: "500",
  },
  subTitle: { fontSize: 16, color: colors.dimGray },
});
