import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { ImageSelector, LocationSelector } from "../../components";

import { THEME } from '../../constants/theme/index'
import { addPlace } from '../../store/actions/index';
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch()

  const onHandlerSubmit = () => {
    console.log("onSUBMITE")
    console.log(image)
    console.log(coords)
    const datos ={
      title: title,
      image: image,
      coords: coords,
    }
    console.log("pase")
    dispatch(addPlace(datos));  
    navigation.goBack();
    
    //navigation.navigate('PlaceList', { screen: "Places"  });
  };

  const onImage = (uri) => {
    setImage(uri);
  };
  const onLocation = (location) => {
    setCoords(location);
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lugar</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del lugar"
          onChangeText={title=>setTitle(title)}
          value={title}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={title.length === 0}
          color={THEME.colors.primary}
          title="Guardar"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
