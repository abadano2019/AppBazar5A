import {Alert, Button, Image, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { THEME } from '../../constants/theme';
import { addToCart } from '../../store/actions/index';
import { styles } from './styles';

const ProductDetail = ({ navigation }) => {

  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch()

  const onHandleAddToCart = () =>{
    dispatch(addToCart(product))
    Alert.alert("Product", "Product added successfully", [
      { text: "", style: "success" },
    ]);
  }

  return (
    <View style={styles.container}>
      <Image
          source={{uri: product.src}}
          style={styles.image}
        />
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.title}>Description: {product?.description}</Text>
      <Text style={styles.title}>Pakage weight: {product?.PakageWeight}</Text>
      <Text style={styles.title}>$ {product?.price}</Text>
      <Button title="Add to Cart" 
        onPress={onHandleAddToCart} 
        color={THEME.colors.text} />
    </View>
  );
};

export default ProductDetail;
