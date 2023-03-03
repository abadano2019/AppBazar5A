import { FlatList, Text, View } from 'react-native';
import {deleteOrder, getOrders, selectOrder} from '../../store/actions/index'
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OrderItem from '../../components/order-item';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Orders = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list)
  const user = useSelector((state) => state.auth.userId)
  
  const onHandleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  const onHandleSelected = (item) => {
       
    dispatch(selectOrder(item.id));
    navigation.navigate('OrderDetail', {
      id: item.id,
      
    });
  };

  const listOrders = () => {
    console.log("entre en orders")
    const filteredOrders = orders.filter((order) => order.user === user)
    console.log(filteredOrders)
    return filteredOrders 
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onHandleDelete} onSelected={onHandleSelected}/>;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={listOrders()} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
