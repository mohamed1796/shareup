import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.100.239:8080",
  },
  staging: {
    apiUrl: "http://192.168.100.2:8080",
  },
  prod: {
    apiUrl: "http://192.168.100.239:8080",
  },
};

const getCurrentSettings = () => {
  // If app running locally __DEV_ returns true.
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
