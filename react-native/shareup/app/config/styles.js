import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  inputIcon: {
    marginRight: 10,
  },
  formScreen: {
    padding: 10,
  },
  circledProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
};
