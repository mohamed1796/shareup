import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import Button from "../components/buttons/LinkButton";
import Screen from "../components/Screen";
import UserContext from "../UserContext";

export default function AccountScreen(props) {
  const { user, setUser } = useContext(UserContext);

  const handelLogout = () => {
    setUser(null);
  };

  return (
    <Screen style={styles.container}>
      <Text>
        {user.firstName} {user.lastName}
      </Text>
      <Text>{user.email}</Text>
      <Button title="logout" onPress={handelLogout} style={styles.button} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
  },
});
