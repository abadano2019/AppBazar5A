import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {addQuantity, confirmOrder, remoreFromCart, substractQuantity} from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../../components/cart-item';
import { styles } from './styles';

const Cart = ({ navigation }) => {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const user = useSelector((state) => state.auth.userId)
  
  const onHandleDelete = (id) => {
    dispatch(remoreFromCart(id))
  };

  const onHandleConfirmOrder = () => {
    dispatch(confirmOrder(cart,total,user))
  }

  const onHandlerSubstractQuantity = (id) =>{
    
    dispatch(substractQuantity(id))
  }

  const onHandlerAddQuantity = (id) =>{
    
    dispatch(addQuantity(id))
  }
  
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandleDelete} 
                                                         onSubstractQuantity={onHandlerSubstractQuantity}
                                                         onAddQuantity={onHandlerAddQuantity} />;
  const keyExtractor = (item) => item.id.toString();

  const Header = () => cart.length <= 0 && (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart is empty</Text>
      </View>
  );
  
  const Footer = () => cart.length > 0 && (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onHandleConfirmOrder}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
  )


  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Header/>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
        <Footer/>
      </View>
    </View>
  );
};

export default Cart;
