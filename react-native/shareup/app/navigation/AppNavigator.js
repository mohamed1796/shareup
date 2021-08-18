import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
import defaultStyles from "../config/styles";
import UserProfilePicture from "../components/UserProfilePicture";

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
const Drawer = createDrawerNavigator();

console.log(`Tab: `, Tab);

function RandomScreen() {
  return <Text>Just a Screen</Text>;
}
function GymDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Gym" component={RandomScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  // useNotifications();

  const handleAddPost = () => {
    alert("This is add post button!");
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{
            header: () => <CustomHeaderBar />,
            // headerTitle: "",
            // headerLeft: () => <Icon image={require("../assets/main-logo.png")} />,
            // headerRight: () => <View></View>,
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
            headerShown: false,
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
            headerShown: false,
            tabBarIcon: () => (
              <AddPostButton
                onPress={() => navigation.navigate(routes.ADD_POST)}
              />
            ),
            headerLeft: ({ navigation }) => (
              <IconButton
                style={styles.button}
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
                style={styles.button}
              />
            ),
          })}
        />

        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            headerTitle: "",
            headerStyle: {
              elevation: 0,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerRight: () => (
              <UserProfilePicture size={50} style={styles.headerRight} />
            ),
            headerLeft: () => (
              <Text style={[styles.headerLeft, defaultStyles.titleFontSize]}>
                Activity
              </Text>
            ),
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
              // <Icon
              //   name="menu"
              //   type="Feather"
              //   backgroundSizeRatio={1}
              //   size={size}
              //   color={color}
              // />
              <TouchableWithoutFeedback onPress={() => alert("Heloooooo")}>
                <View style={styles.menu}>
                  <Icon
                    name="menu"
                    type="Feather"
                    backgroundSizeRatio={1}
                    size={size}
                    color={color}
                  />
                </View>
              </TouchableWithoutFeedback>
            ),
          }}
        />
      </Tab.Navigator>

      {/* <Modal isVisible={true} style={styles.modal}>
        <Text>This is modal</Text>
      </Modal> */}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    color: colors.dimGray,
    marginHorizontal: 20,
  },
  headerLeft: {
    marginLeft: 10,
    margin: 5,
  },
  headerRight: {
    marginRight: 10,
    margin: 5,
  },
  menu: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    height: "50%",
    width: "80%",
    backgroundColor: "white",
    position: "absolute",
  },
});
