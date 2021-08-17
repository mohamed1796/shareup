import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";

import UserContext from "../UserContext";
import settings from "../config/settings";

export default function UserProfilePicture({ size, style }) {
  const { user } = useContext(UserContext);

  return (
    //   <Image source={{ uri: settings.apiUrl + user.profilePicturePath }} />

    <Image
      source={{ uri: settings.apiUrl + user.profilePicturePath }}
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
    />
  );
}
