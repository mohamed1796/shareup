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
    backgroundColor: colors.lighterGray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    paddingHorizontal: 30,
    marginVertical: 5,
    alignItems: "center",
    height: 50,
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
  titleFontSize: {
    fontWeight: "bold",
    fontSize: 22,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,
  },
  lightShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 3,
  },
  cardBorder: {
    borderColor: colors.grayX11Gray,
    borderWidth: 1,
    borderRadius: 10,
  },
};
