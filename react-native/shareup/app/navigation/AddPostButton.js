import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../components/Icon";

export default function AddPostButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          image={require("../assets/tab-navigation-icons/add-icon.png")}
          size={50}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 15,
    // opacity: 0.8,
  },
});
