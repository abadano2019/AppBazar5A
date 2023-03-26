import * as ImagePicker from 'expo-image-picker';

import { Alert, Button, Image, Text, View } from 'react-native';

import { THEME } from '../../constants/theme/index';
import { styles } from './styles';
import { useState } from 'react';

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Insufficient permissions', 'You need to give permissions to use the camera.', [
        { text: 'Ok' },
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

    setPickedUrl(image.assets[0].uri);
    onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No image selected.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="select image" color={THEME.colors.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
