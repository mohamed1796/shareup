import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import Logo from "../components/Logo";
import LinkButton from "../components/buttons/LinkButton";
import Text from "../components/Text";
import colors from "../config/colors";
import Button from "../components/buttons/Button";
import UserContext from "../UserContext";
import AuthService from "../services/auth.services";
import UserService from "../services/UserService";
import Separator from "../components/Separator";
import IconButton from "../components/buttons/IconButton";

// import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";

// determine all the rules for validating our form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

export default function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState('makbar@shareup.qa')
  // const [password, setPassword] = useState('123')

  // const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async ({ email, password }) => {
    await AuthService.login(email, password).then(
      (res) => {
        // user = (res.data)
        getUser(res.data.username);
        // console.log("Here");
        // setUser(res.data)
        // navigation.navigate('Root')

        // console.log("Yo this is the user" + user)
      },
      (error) => {
        // const resMessage = (error.res && error.res.data && error.res.data.message)
        //     || error.message || error.toString();
        setLoginFailed(true);
      }
    );
  };

  const getUser = async (email) => {
    // console.log("begin getUser")
    await UserService.getUserByEmail(email).then((res) => {
      // console.log("user from context " + user.email )
      console.log("user email " + res.data.email);
      console.log("user hashed password " + res.data.password);
      setUser(res.data);
    });
    // console.log("end getUser")
  };

  return (
    <Screen>
      <Logo />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.formContainer}>
          <ErrorMessage
            error="Invalid email and/or password."
            visible={loginFailed}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress" // Only for ios
          />

          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password" // Only for ios
          />
          <SubmitButton title="Share in" />
          <LinkButton title="Forgot password?" style={styles.linkedButton} />
        </View>
      </Form>

      <View style={styles.secondContainer}>
        <IconButton />
      </View>

      <Separator text="or" />

      <View style={styles.thirdContainer}>
        <LinkButton title="Create new account?" style={styles.linkedButton} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    alignItems: "center",
  },
  thirdContainer: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: colors.medium,
  },
  linkedButton: {
    margin: 10,
  },
  secondContainer: {},
});
