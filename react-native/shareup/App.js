import React, { useState } from "react";

import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NewsFeedScreen from "./app/screens/NewsFeedScreen";
import UserContext from "./app/UserContext";
import { View } from "react-native";

export default function App() {
  const [user, setUser] = useState();

  return (
    // <View></View>
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <NewsFeedScreen /> : <AuthNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
