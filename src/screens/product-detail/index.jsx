import {Button, Image, Text, View} from 'react-native';

import { PRODUCTS } from '../../constants/data';
import React from 'react';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const ProductDetail = ({ navigation, route }) => {
  const { productId, title } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);

  const onHandleAddCart = () =>{}

  return (
    <View style={styles.container}>
      <Image
          source=
            {require("../../constants/data/pictures/sarten30.jpg")}
          style={styles.image}
        />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.title}>Description: {product.description}</Text>
      <Text style={styles.title}>Pakage weight: {product.PakageWeight}</Text>
      <Text style={styles.title}>$ {product.price}</Text>
      <Button title="Add Cart" onPress={onHandleAddCart} color={THEME.colors.text} />
    </View>
  );
};

export default ProductDetail;
