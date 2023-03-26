import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const ProductOrderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer}>
        <Image source={{ uri: item.src }} style={styles.image} />
        <View style={styles.detail_Conteiner}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>Price ${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductOrderItem;
