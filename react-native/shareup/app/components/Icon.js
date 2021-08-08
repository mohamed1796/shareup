import React from "react";
import { View, Image } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  Ionicons,
} from "@expo/vector-icons";

export default function Icon({
  image,
  name,
  size = 40,
  backgroundColor = "#fff",
  color = "#000",
  type = "MaterialCommunityIcons",
}) {
  const renederImageorIcon = () => {
    if (image)
      return <Image source={image} style={{ width: size, height: size }} />;
    else
      return (
        <>
          {type === "MaterialCommunityIcons" && (
            <MaterialCommunityIcons
              size={size * 0.5}
              name={name}
              color={color}
            />
          )}
          {type === "AntDesign" && (
            <AntDesign size={size * 0.5} name={name} color={color} />
          )}
          {type === "Entypo" && (
            <Entypo size={size * 0.5} name={name} color={color} />
          )}
          {type === "EvilIcons" && (
            <EvilIcons size={size * 0.5} name={name} color={color} />
          )}
          {type === "Feather" && (
            <Feather size={size * 0.5} name={name} color={color} />
          )}
          {type === "FontAwesome" && (
            <FontAwesome size={size * 0.5} name={name} color={color} />
          )}
          {type === "FontAwesome5" && (
            <FontAwesome5 size={size * 0.5} name={name} color={color} />
          )}
          {type === "Fontisto" && (
            <Fontisto size={size * 0.5} name={name} color={color} />
          )}
          {type === "Foundation" && (
            <Foundation size={size * 0.5} name={name} color={color} />
          )}
          {type === "MaterialIcons" && (
            <MaterialIcons size={size * 0.5} name={name} color={color} />
          )}
          {type === "Octicons" && (
            <Octicons size={size * 0.5} name={name} color={color} />
          )}
          {type === "SimpleLineIcons" && (
            <SimpleLineIcons size={size * 0.5} name={name} color={color} />
          )}
          {type === "Zocial" && (
            <Zocial size={size * 0.5} name={name} color={color} />
          )}
          {type === "Ionicons" && (
            <Ionicons size={size * 0.5} name={name} color={color} />
          )}
        </>
      );
  };
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renederImageorIcon()}
    </View>
  );
}
