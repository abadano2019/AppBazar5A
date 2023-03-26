import { delete_Place, loadPlaces, viewPlace } from '../../store/actions/index';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import { PlaceItem } from '../../components';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const PlaceList = ({ navigation }) => {
  let places = useSelector((state) => state.places.places);
  const [datosPlaces, setDatosPlaces] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userId);

  const listPlaces = () => {
    const filteredPlaces = places.filter((place) => place.user === user);
    return filteredPlaces;
  };

  useEffect(
    useCallback(() => {
      dispatch(loadPlaces(user));
      places = listPlaces();
    }),
    [dispatch]
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(loadPlaces(user));
      setDatosPlaces(places);
      return () => {
        setDatosPlaces([]);
      };
    }, [dispatch])
  );

  const onDeleteHandler = (id) => {
    dispatch(delete_Place(id));
    dispatch(loadPlaces(user));
    setDatosPlaces(places);
    alert('Deleted place');

    setTimeout(() => navigation.goBack(), 2000);
  
  };

  const renderItem = ({ item }) => (
    <PlaceItem
      item={item}
      onSelect={() => navigation.navigate('PlaceDetail', { placeId: item.id })}
      onDelete={() => onDeleteHandler(item.id)}
    />
  );

  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={places}
      //data={datosPlaces}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
