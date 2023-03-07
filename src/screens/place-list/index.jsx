import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { PlaceItem } from "../../components";
import { styles } from "./styles";
import { useFocusEffect } from '@react-navigation/native';
import {viewPlace} from '../../store/actions/index'

const PlaceList = ({ navigation }) => {
  let places = useSelector((state) => state.places.places);
  const [count, setCount] = useState(0)
  const [datosPlaces, setDatosPlaces] = useState(null);
  const dispatch = useDispatch();

  console.log("entre a los items de places")
  console.log('places', places)

  const listPlaces = () => {
    console.log("entre en list Places")
    //const filteredPlaces = places.filter((place) => place.image !== undefined)
    const filteredPlaces = places
    console.log(filteredPlaces)
    setCount(count + 1)
    return filteredPlaces 
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(viewPlace());
      setCount(count => count +1)
      console.log("DATA")
      places = listPlaces()
      console.log(places)
      setDatosPlaces(places)
      return () => {
        setDatosPlaces([])
      }
    }, [datosPlaces])
  );

  const renderItem = ({ item }) =>(  
    < PlaceItem
      item = {item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />)
  
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={datosPlaces}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;

