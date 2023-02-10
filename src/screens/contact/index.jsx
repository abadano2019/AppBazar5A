import { Button, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

import { CART } from '../../constants/data/index';
import CartItem from '../../components/cart-item';
import { THEME } from '../../constants/theme';
import { styles } from './styles';

const Contact = ({ navigation }) => {

  const [name,setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [clear, setClear] = useState(false)

  onHandleFormSubmit = () =>{
    console.log(name,mail,message)
    setMail("")
    setName("")
    setMessage("")
    setClear(true)
    setClear(false)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contact Form </Text>
      <View style={styles.textContainer}>
        <TextInput 
          style={styles.textFormat} 
          placeholder="enter name" 
          onChangeText={name=>setName(name)}
          value={!clear ? name : null }
        />
          
        <TextInput 
          style={styles.textFormat} 
          placeholder="enter you mail" 
          onChangeText={mail=>setMail(mail)}
          value={!clear ? mail : null }
        />
          
        <TextInput
          placeholder="enter your message"
          style={styles.textFormat}
          numberOfLines={4}
          onChangeText={message =>setMessage(message)}
          value={!clear ? message : null }
         />
      </View>
      <Button title='Enviar' color={THEME.colors.primary} onPress={onHandleFormSubmit}></Button>
    </View>
  );
};

export default Contact;
