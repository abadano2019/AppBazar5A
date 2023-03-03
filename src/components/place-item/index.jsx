import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

//const PlaceItem = ({ id, title, image, coords, onSelect }) => {
  const PlaceItem = ({ item, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.coords.lat}</Text>
        <Text style={styles.title}>{item.coords.lng}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
