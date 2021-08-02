import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
  FormPicker
} from "../components/forms";
import defaultStyle from "../config/styles";
import Logo from "../components/Logo";
// import ActivityIndicator from "../components/ActivityIndicator";
// import users from "../api/users";
// import useApi from "../hooks/useApi";
// import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";

// determine all the rules for validating our form
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  surname: Yup.string().required().label("Surname"),
  birthday: Yup.string().required().label("Birthday"),
  gender: Yup.string().required().nullable().label("Gender"), 
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password"),
});

export default function RegisterScreen(params) {
  // const registerApi = useApi(users.register);
  // const loginApi = useApi(authApi.login);
  // const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    // const result = await registerApi.request(userInfo);
    // if (!result.ok) {
    //   if (result.data) setError(result.data.error);
    //   // if we got an error from the server
    //   else {
    //     // if we didn't got the error from the server
    //     setError("An unexpected error occurred");
    //     console.log(result);
    //   }
    //   return;
    // }
    // const { data: authToken } = await loginApi.request(
    //   userInfo.email,
    //   userInfo.password
    // );
    // auth.logIn(authToken);
    // login.handleLogin(result.data); // this method will destructure the given object.
  };

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
  ]

  return (
    <>
      {/* <ActivityIndicator visible={registerApi.loading || loginApi.loading} /> */}
      <Screen style={styles.screen}>
        {/* <Logo /> */}
        <Form
          initialValues={{ firstName: "", surname:"",birthday:"",  email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false} 
            name="firstName"
            placeholder="First Name"
          />
          <FormField
            autoCorrect={false}
            name="surname"
            placeholder="Second Name"
          />
          
          <FormField
            autoCorrect={false}
            name="birthday"
            placeholder="Enter your Birthday..."
          />

          <FormPicker name="gender" items={items} placeholder="choose your gender"/>

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
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  screen:{
    paddingTop:50, 
    padding:20, 
  }, 
});