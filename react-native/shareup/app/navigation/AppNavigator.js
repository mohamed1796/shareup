import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import AddPostButton from "./AddPostButton";
import AddPostScreen from "../screens/AddPostScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import AccountScreen from "../screens/AccountScreen";
// import FeedNavigator from "./FeedNavigator";
// import AccountNavigator from "./AccountNavigator";
// import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
console.log(`Tab: `, Tab);

export default function AppNavigator() {
  // useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeedScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <AddPostButton
              onPress={() => navigation.navigate(routes.ADD_POST)}
            />
          ),
        })}
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
