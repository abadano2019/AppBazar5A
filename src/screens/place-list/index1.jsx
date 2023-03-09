import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { PlaceItem } from "../../components";
import { loadPlaces } from "../../store/actions/places.action";
import { styles } from "./styles";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  console.log("**************************")
  console.log(places)
  console.log("**************************")
  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );
  const keyExtractor = (item) => item.id;

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
