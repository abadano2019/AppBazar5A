import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { THEME } from '../../constants/theme/index';
import { styles } from './styles';

const CartItem = ({ item, onDelete, onSubstractQuantity, onAddQuantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.quantity}>qty: {item.quantity}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => onSubstractQuantity(item.id)}>
            <Ionicons name="remove-circle-outline" size={22} color={THEME.colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onAddQuantity(item.id)}>
            <Ionicons name="add-circle-outline" size={22} color={THEME.colors.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash" size={22} color={THEME.colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
