import * as Yup from "yup";

import {
  ErrorMessage,
  Form,
  FormField,
  FormPicker,
  SubmitButton,
} from "../components/forms";
import React, { useState } from "react";

import AlternativeRegistrationContainer from "../components/AlternativeRegistrationContainer";
import Logo from "../components/Logo";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import { StyleSheet, View } from "react-native";
import Text from "../components/Text";
import UserService from "../services/UserService";
import authApi from "../api/auth";
import defaultStyle from "../config/styles";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import users from "../api/users";

// import ActivityIndicator from "../components/ActivityIndicator";

// determine all the rules for validating our form
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  // birthday: Yup.string().required().label("Birthday"),
  // gender: Yup.string().required().nullable().label("Gender"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .label("Password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});

export default function SignUpScreen({ navigation }) {
  const [error, setError] = useState();

  // const registerApi = useApi(users.register);
  // const loginApi = useApi(authApi.login);

  // const auth = useAuth();

  const handleSubmit = async (userInfo) => {
    // let user = { email, password, firstName, lastName };
    console.log(
      "register " +
        userInfo.email +
        " " +
        userInfo.password +
        " " +
        userInfo.confirmPassword +
        " " +
        userInfo.firstName +
        " " +
        userInfo.lastName
    );

    // console.log(JSON.stringify(user))

    await UserService.createUser(userInfo)
      .then((res) => {
        // history.push('/');
        // setRegisterSuccessful("Your Account Is Successfully Registered");
        navigation.navigate("LoginScreen", {
          message: "Your Account Is Successfully Registered",
        });
        console.log("Your Account Is Successfully Registered");

        // setShowComponent("login")
        // handleLoginAutomatically()
        // openModal()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSubmit = async (userInfo) => {
  //   await UserService.createUser(userInfo)
  //     .then((res) => {
  //       // history.push('/');
  //       // setRegisterSuccessful("Your Account Is Successfully Registered");
  //       navigation.navigate("LoginScreen", {
  //         message: "Your Account Is Successfully Registered",
  //       });

  //       // setShowComponent("login")
  //       // handleLoginAutomatically()
  //       // openModal()
  //     })
  //     .catch((error) => {
  //       setError("User Already Registered");
  //     });

  //   const result = await registerApi.request(userInfo);

  //   console.log(result);
  //   if (!result.ok) {
  //     if (result.data) setError(result.data.error);
  //     // if we got an error from the server
  //     else {
  //       // if we didn't got the error from the server
  //       setError("An unexpected error occurred");
  //       console.log(result);
  //     }
  //     return;
  //   }

  //   auth.logIn(authToken);
  //   login.handleLogin(result.data); // this method will destructure the given object.
  // };

  const items = [
    {
      label: "Male",
      value: 1,
    },
    {
      label: "Female",
      value: 2,
    },
    {
      label: "Custom",
      value: 3,
    },
    {
      label: "Prefer Not to say",
      value: 4,
    },
  ];

  return (
    <>
      {/* <ActivityIndicator visible={registerApi.loading || loginApi.loading} /> */}
      <Screen style={styles.screen}>
        <Logo style={styles.logo} />
        <View style={styles.center}>
          <Text style={styles.title}>Register</Text>
          <Form
            initialValues={{
              firstName: "",
              lastName: "",
              // birthday: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <View style={styles.formContainer}>
              <ErrorMessage error={error} visible={error} />
              <FormField
                autoCorrect={false}
                name="firstName"
                placeholder="First Name"
              />
              <FormField
                autoCorrect={false}
                name="lastName"
                placeholder="Last Name"
              />

              {/* <FormField
            autoCorrect={false}
            name="birthday"
            placeholder="Enter your Birthday..."
          /> */}

              {/* <FormPicker name="gender" items={items} placeholder="choose your gender"/> */}

              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                placeholder="Email"
                textContentType="emailAddress" // Only for ios
              />

              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                placeholder="Password"
                secureTextEntry // for password
                textContentType="password" // Only for ios
              />
              <FormField
                autoCapitalize="none"
                autoCorrect={false}
                name="confirmPassword"
                placeholder="Re-Enter passowrd"
                secureTextEntry // for password
                textContentType="password" // Only for ios
              />
              <SubmitButton
                title="Let's Share in?"
                style={styles.submitButton}
              />
            </View>
          </Form>
          <Separator text="or" />

          <AlternativeRegistrationContainer />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginTop: 20,
  },
  screen: {
    paddingTop: 20,
    padding: 20,
    // justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
    alignSelf: "center",
    margin: 10,
    marginTop: 20,
  },
  formContainer: {
    paddingHorizontal: 25,
  },
  submitButton: {
    alignSelf: "center",
    width: "70%",
    paddingTop: "10%",
  },
  center: {
    flex: 1,
    justifyContent: "center",
  },
});
