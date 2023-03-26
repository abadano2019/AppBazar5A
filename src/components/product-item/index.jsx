import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        <Image source={{ uri: item.src }} style={styles.image} />
        <View style={styles.detail_Conteiner}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>Price ${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
