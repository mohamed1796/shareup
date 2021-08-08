import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import UserContext from "../UserContext";

export default function AccountScreen(props) {
  const { user } = useContext(UserContext);
  return (
    <Screen style={styles.container}>
      <Text>
        {user.firstName} {user.lastName}
      </Text>
      <Text>{user.email}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
