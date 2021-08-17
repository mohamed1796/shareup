import React, { useContext, useState, useCallback, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import PostService from "../services/PostService";
import UserContext from "../UserContext";
import Screen from "../components/Screen";
import Card from "../components/lists/Card";
import colors from "../config/colors";
import FeedTop from "../components/FeedTop";

//ToDo: Sort posts by Published day.
export default function NewsFeedScreen() {
  const { user } = useContext(UserContext);

  const [posts, setPosts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadNews();
    }, [2])
  );
  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const response = await PostService.getPostForUser(user.email);
    if (!response.ok) setPosts(response.data);
    else if (response.ok) console.log("Failed to load posts");
  };
  return (
    <Screen style={styles.container} statusPadding={false}>
      <FeedTop />
      <FlatList
        style={styles.flatList}
        data={posts}
        // ListHeaderComponent={() => <FeedListHeader />}
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
  },
  flatList: {
    padding: 17,
  },
});
