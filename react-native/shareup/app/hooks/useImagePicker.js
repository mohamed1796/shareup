import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default useImagePicker = () => {
  const [imageUri, setImageUri] = useState("");
  const [file, setFile] = useState({});

  const pickImage = async () => {
    // get permission
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");

    // select an image
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      // if (!result.cancelled) onChangeImage(result.uri);
      setImageUri(result.uri);
      setFile(result);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const clearFile = () => {
    setFile({});
  };

  return { file, pickImage, clearFile };
};
