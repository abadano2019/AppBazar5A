import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ProductOrderItem } from '../../components';
import React from 'react';
import { formatDate } from '../../utils/index';
import { loadPlaces } from '../../store/actions/index';
import { styles } from './styles';

const OrderDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userId);
  dispatch(loadPlaces(user));
  const order = useSelector((state) => state.orders.selected);
  const filteredItems = useSelector((state) => state.orders.filteredItems);

  const renderItem = ({ item }) => <ProductOrderItem item={item} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Detalle de orden id: {order.id}</Text>
        <Text style={styles.title}>Fecha de pedido: {formatDate(order.date)}</Text>
      </View>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default OrderDetail;
