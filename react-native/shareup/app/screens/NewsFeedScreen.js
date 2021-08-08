import React, { useContext, useEffect, useState, useCallback } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import PostService from "../services/PostService";
import UserContext from "../UserContext";
import Screen from "../components/Screen";
import Card from "../components/lists/Card";
import colors from "../config/colors";

export default function NewsFeedScreen() {
  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadNews();
    }, [2])
  );
  // useEffect(() => {
  //   loadNews();
  // }, []);

  const loadNews = async () => {
    const response = await PostService.getPostForUser(user.email);
    setPosts(response.data);
  };

  console.log("Posts List:::", posts);
  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            firstName={item.user.firstName}
            lastName={item.user.lastName}
            profileImage={item.user.profilePicturePath}
            date={item.lastEdited}
            postText={item.content}
            imageURL={item.postImagePath}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
  },
  flatlist: {
    padding: 10,
  },
});
