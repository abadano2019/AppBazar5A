import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from "react-native";

import { THEME } from '../../constants/theme/index'
import { styles } from "./styles";
import { useState } from "react";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitas dar permisos para usar la cámara.", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    console.log("URL")
    console.log(image.uri)
    console.log("URL")
    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Seleccionar imagen" color={THEME.colors.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
