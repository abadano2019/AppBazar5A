import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import {loadPlaces, logout} from '../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux';

import { CategoryItem } from '../../components';
import React from 'react';
import { selectCategory } from '../../store/actions';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const user = useSelector((state) => state.auth.userId)
  const token = useSelector((state) => state.auth.token)
  dispatch(loadPlaces())
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
    });
    
  };

  const onHandlerLogout =()=>{
    console.log(user, token)
    dispatch(logout())

  }
  
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
        <View style={{...styles.buttonContainer}}>
          <TouchableOpacity
            style={{ ...styles.contentContainer }}
            onPress={() => onHandlerLogout()}>
            <View>
              <Text style={styles.title}>Exit</Text>
            </View>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Categories;
