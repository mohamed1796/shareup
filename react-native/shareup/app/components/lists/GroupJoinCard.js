import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

import Tab from "../buttons/Tab";
import colors from "../../config/colors";
import defaultStyle from "../../config/styles";

const resizeRatio = 0.6;
export default function GroupJoinCard({ image, title, subTitle }) {
  return (
    <View style={[styles.container, defaultStyle.cardBorder]}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image
          source={require("../../assets/images/group-texture.png")}
          style={styles.image}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={styles.tabsContainer}>
        <Tab
          title="Join"
          style={styles.tab}
          height={22}
          sizeRatio={resizeRatio}
          fontColor={colors.white}
          color={colors.iondigoDye}
        />
        <Tab
          title="Preview"
          style={styles.tab}
          height={22}
          sizeRatio={resizeRatio}
          color={colors.lighterGray}
          fontColor={colors.dark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 3.45,
    height: 170,
    overflow: "hidden",
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "55%",
    borderRadius: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    top: 9,
  },
  tab: {
    borderRadius: 5,
    margin: 3,
  },
  tabTitleStyle: {
    fontSize: 13,
  },
  title: {
    fontSize: 11,
    margin: 1,
  },
  subTitle: {
    fontSize: 10,
    color: colors.mediumGray,
    alignSelf: "flex-end",
    marginHorizontal: 1,
  },
});
