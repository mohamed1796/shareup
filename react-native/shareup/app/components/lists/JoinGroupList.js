import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import GroupJoinCard from "./GroupJoinCard";

const data = [
  {
    id: 1,
    title: "Football",
    subTitle: "2.7k members",
    image: require("../../assets/images/stadium.png"),
  },
  {
    id: 2,
    title: "Developer Team",
    subTitle: "2.7k members",
  },
  {
    id: 3,
    title: "Developer Team",
    subTitle: "2.7k members",
  },
  {
    id: 4,
    title: "Developer Team",
    subTitle: "2.7k members",
  },
  {
    id: 5,
    title: "Developer Team",
    subTitle: "2.7k members",
  },
];
export default function JoinGroupList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GroupJoinCard
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
