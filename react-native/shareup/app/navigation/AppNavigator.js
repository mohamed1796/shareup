import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions, Image, View } from "react-native";

import routes from "./routes";
import AddPostButton from "./AddPostButton";
import AddPostScreen from "../screens/AddPostScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import AccountScreen from "../screens/AccountScreen";
import Button from "../components/buttons/LinkButton";
import colors from "../config/colors";
import IconButton from "../components/buttons/IconButton";
import Icon from "../components/Icon";
import GroupsScreen from "../screens/GroupsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import CustomHeaderBar from "./CustomHeaderBar";

// import FeedNavigator from "./FeedNavigator";
// import AccountNavigator from "./AccountNavigator";
// import useNotifications from "../hooks/useNotifications";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Tab = createBottomTabNavigator();
console.log(`Tab: `, Tab);

export default function AppNavigator() {
  // useNotifications();

  const handleAddPost = () => {
    alert("This is add post button!");
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeedScreen}
        options={{
          header: () => <CustomHeaderBar />,
          // headerTitle: "",
          // headerLeft: () => <Icon image={require("../assets/main-logo.png")} />,
          // headerRight: () => <View></View>,
          tabBarLabel: "News Feed",
          tabBarIcon: ({ size, color }) => (
            <Icon
              image={require("../assets/tab-navigation-icons/home-icon.png")}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon
              image={require("../assets/tab-navigation-icons/groups-icon.png")}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={({ navigation }) => ({
          transitionSpec: {
            open: config,
            close: config,
          },
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: () => (
            <AddPostButton
              onPress={() => navigation.navigate(routes.ADD_POST)}
            />
          ),
          headerLeft: ({ navigation }) => (
            <IconButton
              style={styles.botton}
              onPress={() => navigation.navigate(routes.FEED)}
              IconComponent={
                <Icon name="close" color={colors.dimGray} type="AntDesign" />
              }
            />
          ),
          headerRight: () => (
            <Button
              onPress={handleAddPost}
              title="Post"
              style={styles.botton}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon
              image={require("../assets/tab-navigation-icons/bell-icon.png")}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  botton: {
    backgroundColor: colors.white,
    color: colors.dimGray,
    marginHorizontal: 20,
  },
});
