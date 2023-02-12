import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import OrderItem from '../../components/order-item';
import {selectOrder} from '../../store/actions/order.action'
import { styles } from './styles';

const Orders = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders)
  const onDelete = (id) => {};

  const onSelected = (item) => {
    
    dispatch(selectOrder(item.id));
    navigation.navigate('OrderDetail', {
      id: item.id,
      
    });
  };

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} onSelected={onSelected}/>;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
