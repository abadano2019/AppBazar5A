import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { PlaceItem } from "../../components";
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import {viewPlace} from '../../store/actions/index'

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);

  console.log("entre a los items de places")
  console.log('places', places)

  const listPlaces = () => {
    console.log("entre en list Places")
    const filteredPlaces = places.filter((place) => place.image !== undefined)
    console.log(filteredPlaces)
    return filteredPlaces 
  }

  /*useFocusEffect(
    useCallback(() => {
      dispatch(viewPlace());
    }, [dispatch])
  );*/

  useEffect(() => {
    const lista = listPlaces();
    console.log("entre a use Effect")
    setCount(count => count + 1)
    setData(lista);
  }, []);

  const renderItem = ({ item }) =>(  
    < PlaceItem
      item = {item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />)
  
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;

