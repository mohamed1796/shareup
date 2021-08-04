import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
