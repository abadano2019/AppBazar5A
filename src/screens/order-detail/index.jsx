import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { ProductOrderItem } from '../../components';
import React from 'react';
import { formatDate } from '../../utils/index';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const OrderDetail = ({ navigation }) => {

  const order = useSelector((state) => state.orders.selected)
  const filteredItems = useSelector((state) => state.orders.filteredItems);

  const renderItem = ({ item }) => <ProductOrderItem item={item}/>;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Detalle de orden id:   {order.id}</Text>
        <Text style={styles.title}>Fecha de pedido:  {formatDate(order.date)}</Text>
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
