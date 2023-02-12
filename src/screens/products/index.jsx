import { FlatList, SafeAreaView } from 'react-native';
import { filterProducts, selectProduct } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { ProductItem } from '../../components';
import React from 'react';
import { styles } from './styles';
import { useEffect } from 'react';

const Products = ({ navigation}) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('ProductDetail', {
      title: item.title,
    });
  };

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default Products;
