import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { ImageSelector, LocationSelector } from "../../components";
import { addPlace, savePlace } from '../../store/actions/index';
import { useEffect, useState } from "react";

import { THEME } from '../../constants/theme/index'
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch()

  const timer = (num )=>{
    let count = 0;
    while (count <= num){
      count = count +1; 
    }
  }

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
    //dispatch(addPlace(datos));  
    dispatch(savePlace(datos));
    alert('Ubicación agregada')
    setTimeout(() => navigation.goBack(), 2000);

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
