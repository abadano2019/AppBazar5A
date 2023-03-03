import {Image, Text, TouchableOpacity, View} from 'react-native';

import { styles } from './styles';

let bgColor = (id) =>{
  let color = ""
  switch (id) {
    case 1:{ color = '#78CDD7'
            break}
    case 2: {color = '#44A1A0'
            break}
    case 3: {color = '#0D5C63'
            break}
    case 4: {color = '#247B7B'
            break}
    case 5: {color = '#17A7B5'
            break}
  }
  return color
} 

const ProductItem = ({ item, onSelected }) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => onSelected(item)}>
        
        <Image
          /*source={{
            uri: "https://mystickermania.com/cdn/stickers/noob-pack/game-over-glitch-effect-512x512.png",
          }}*/
          
          source={{uri: item.src}}
            
           //sourse = {require("../../../public/sarten30.jpg")}
            //uri: "https://mystickermania.com/cdn/stickers/noob-pack/game-over-glitch-effect-512x512.png",
          
          style={styles.image}
        />
        <View style={styles.detail_Conteiner }>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>Price ${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
