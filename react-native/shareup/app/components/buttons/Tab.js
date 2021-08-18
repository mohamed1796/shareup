import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import Icon from "../Icon";
import colors from "../../config/colors";

export default function AppButton({
  title,
  onPress,
  color = colors.lighterGray,
  sizeRatio = 1,
  width,
  height = 40 * sizeRatio,
  style,
  iconName,
  iconType,
  iconImage,
  iconColor = "",
  iconSize = 22 * sizeRatio,
  fontColor = colors.dark,
  fontWeight = "normal",
  titleStyle,
}) {
  const renderIcon = () => {
    if (iconName)
      return (
        <Icon
          name={iconName}
          type={iconType}
          size={iconSize}
          color={fontColor}
          backgroundColor={color}
          style={styles.icon}
          backgroundSizeRatio={0.9}
        />
      );
    if (iconImage)
      return (
        <Icon
          image={iconImage}
          size={iconSize}
          color={fontColor}
          backgroundColor={color}
          style={styles.icon}
          backgroundSizeRatio={0.9}
        />
      );
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          width,
          height,
          paddingHorizontal: 20 * sizeRatio,
        },
        style,
      ]} //wrap the button inside a container to modify the width: ;
      onPress={onPress}
    >
      {renderIcon()}
      <Text
        style={[
          styles.title,
          {
            fontSize: 13 * sizeRatio,
            marginLeft: 5 * sizeRatio,
            color: fontColor,
            fontWeight: fontWeight,
          },
          titleStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 20 / sizeRatio,
  },
  title: {
    // fontSize: 13 / sizeRatio,
    // marginLeft: 5 / sizeRatio,
  },
});
