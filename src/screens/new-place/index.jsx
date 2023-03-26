import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { ImageSelector, LocationSelector } from '../../components';
import { addPlace, loadPlaces, savePlace } from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { THEME } from '../../constants/theme/index';
import { styles } from './styles';

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const user = useSelector((state) => state.auth.userId);

  const timer = (num) => {
    let count = 0;
    while (count <= num) {
      count = count + 1;
    }
  };

  const onHandlerSubmit = () => {
    const datos = {
      user: user,
      title: title,
      image: image,
      coords: coords,
    };

    dispatch(savePlace(datos));
    alert('Places added');
    dispatch(loadPlaces(user));

    //setTimeout(() => navigation.goBack(), 2000);
    setTimeout(() => navigation.navigate('Places'), 2000);
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
        <Text style={styles.title}>Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the place name"
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={title.length === 0}
          color={THEME.colors.primary}
          title="Save"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
