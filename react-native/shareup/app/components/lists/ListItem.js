import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
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
    <TouchableHighlight
      style={[styles.container, style]}
      underlayColor={colors.light}
      onPress={onPress}
    >
      <View style={styles.listItem}>
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
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, padding: 15 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: { marginLeft: 10, flex: 1 },
  image: { height: 70, width: 70, borderRadius: 35 },
  title: {
    fontSize: 18,
    marginBottom: 3,
    color: colors.black,
    fontWeight: "500",
  },
  subTitle: { fontSize: 16, color: colors.medium },
});
