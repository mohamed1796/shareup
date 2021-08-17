import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";
import { AppNavigator, AuthNavigator } from "./app/navigation";
import NewsFeedScreen from "./app/screens/NewsFeedScreen";
import UserContext from "./app/UserContext";
import AddPostScreen from "./app/screens/AddPostScreen";
import Icon from "./app/components/Icon";
import { View, StyleSheet, Text } from "react-native";

import GroupsScreen from "./app/screens/GroupsScreen";
import ActivityScreen from "./app/screens/ActivityScreen";
import UserProfilePicture from "./app/components/UserProfilePicture";
import ListItem from "./app/components/lists/ListItem";
import defaultStyles from "./app/config/styles";
import colors from "./app/config/colors";

function Test() {
  return (
    <View style={styles.container}>
      <ListItem
        image={require("./app/assets/default-profile-picture.png")}
        title="Name"
        subTitle="Subtitle"
        style={styles.listItem}
      />
    </View>
  );
}

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    // <Test />
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 40,
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,
  },
});
