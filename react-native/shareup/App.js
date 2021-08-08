import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";
import { AppNavigator, AuthNavigator } from "./app/navigation";
import NewsFeedScreen from "./app/screens/NewsFeedScreen";
import UserContext from "./app/UserContext";
import AddPostScreen from "./app/screens/AddPostScreen";
import Icon from "./app/components/Icon";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}
