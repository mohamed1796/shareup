import * as Yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import AlternativeRegistrationContianer from "../components/AlternativeRegistrationContianer";
import AuthService from "../services/auth.services";
import IconButton from "../components/buttons/IconButton";
import LinkButton from "../components/buttons/LinkButton";
import Logo from "../components/Logo";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import UserContext from "../UserContext";
import UserService from "../services/UserService";
import authApi from "../api/auth";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import routes from "../navigation/routes";

// determine all the rules for validating our form
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

export default function LoginScreen({ navigation }) {
  // const [email, setEmail] = useState('makbar@shareup.qa')
  // const [password, setPassword] = useState('123')

  // const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const { user, setUser } = useContext(UserContext);

  // const handleSubmit = async ({ email, password }) => {
  //   const result = await authApi.login(email, password);
  //   console.log(result);
  //   if (!result.ok) return setLoginFailed(true);

  //   setLoginFailed(false);
  //   logIn(result.data);
  // };

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
      <Logo mainLogo={true} />
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

      <AlternativeRegistrationContianer />

      <Separator text="or" style={styles.saperator} />

      <View style={styles.thirdContainer}>
        <LinkButton
          title="Create new account?"
          style={styles.linkedButton}
          onPress={() => {
            navigation.navigate(routes.SIGNUP);
          }}
        />
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
  secondContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  iconButton: {
    margin: 20,
  },
  saperator: {
    paddingHorizontal: 20,
  },
});
