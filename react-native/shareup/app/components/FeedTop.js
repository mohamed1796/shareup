import React from "react";
import { View, StyleSheet } from "react-native";
import StoryCard from "./lists/StoryCard";

export default function FeedTop() {
  return (
    <View style={styles.container}>
      <StoryCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
