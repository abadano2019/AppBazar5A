import * as Location from 'expo-location';

import { Alert, Button, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import MapPreview from '../map-preview/index';
import { THEME } from '../../constants/theme/index';
import { styles } from './styles';

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const { mapLocation } = route.params || {};

  const [pickedLocation, setPickedLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('No hay permisos para acceder a la ubicacion', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async (isMaps = false) => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });
    onLocation({ lat: latitude, lng: longitude });
  };

  const onHandlerMapsLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;
    navigation.navigate('Maps', { coords: { lat: latitude, lng: longitude } });
  };

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text style={styles.text}>No location selected</Text>
      </MapPreview>
      <View style={styles.buttonContainer}>
        <Button
          title="Select location"
          onPress={onHandleGetLocation}
          color={THEME.colors.primary}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Select from map"
          onPress={onHandlerMapsLocation}
          color={THEME.colors.secondary}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
