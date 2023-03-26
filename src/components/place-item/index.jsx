import { Image, Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { THEME } from '../../constants/theme/index';
import { styles } from './styles';

const PlaceItem = ({ item, onSelect, onDelete }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>Name: {item.title}</Text>
        <Text style={styles.title}>{item.address}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash" size={22} color={THEME.colors.black} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PlaceItem;
