import { Button, Text, TextInput, View } from 'react-native';

import { THEME } from '../../constants/theme';
import { addMessage } from '../../store/actions/contact.action';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Contact = ({ navigation }) => {

  const dispatch = useDispatch()
  const [name,setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [clear, setClear] = useState(false)

  onHandleFormSubmit = () =>{
    
    const datos = {
        name: name,
        mail: mail,
        message: message
    }
    dispatch(addMessage(datos))
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
