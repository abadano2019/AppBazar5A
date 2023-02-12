import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { THEME } from '../../constants/theme';
import { formatDate } from '../../utils/index';
import { styles } from './styles';

const OrderItem = ({ item, onDelete, onSelected }) => {
  return (
      <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
        <View style={styles.headerContainer}>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.total}>${item.total}</Text>
          </View>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash" size={22} color={THEME.colors.black} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  );
};

export default OrderItem;
