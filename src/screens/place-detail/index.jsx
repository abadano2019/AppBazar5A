import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { loadPlaceById, loadPlaces } from '../../store/actions/index';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MapPreview } from '../../components/index';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const PlaceDetail = ({ navigation, route }) => {
  const { placeId } = route.params;

  const [datosPlaces, setDatosPlaces] = useState(null);
  const user = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  dispatch(loadPlaces(user));

  const places = useSelector((state) => state.places.places);

  const findPlace = (placeId) => {
    const place = places.find((place) => place.id == placeId);
    return place;
  };

  const placeFinded = findPlace(placeId);

  useEffect(
    useCallback(() => {
      dispatch(loadPlaces(user));
    }),
    [dispatch]
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(loadPlaces(user));
      return () => {
        setDatosPlaces([]);
      };
    }, [dispatch])
  );

  const placeCoords = JSON.parse(placeFinded?.coords);
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.address}>Name: {placeFinded.title}</Text>
        </View>
        <Image source={{ uri: placeFinded.image }} style={styles.image} />
        <View style={styles.mapContainer}>
          <View style={styles.location}>
            <View style={styles.addressContainer}>
              <Text style={styles.mapAddress}>{placeFinded.address}</Text>
            </View>
            <MapPreview
              style={styles.map}
              location={{ lat: placeCoords.lat, lng: placeCoords.lng }}>
              <Text>Ubicacion no disponible</Text>
            </MapPreview>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceDetail;
