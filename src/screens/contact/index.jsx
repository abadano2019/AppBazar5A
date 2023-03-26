import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from '../../constants/theme';
import { addMessage } from '../../store/actions/contact.action';
import {loadPlaces} from '../../store/actions/index';
import { styles } from './styles';
import { useState } from 'react';

const Contact = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userId);
  dispatch(loadPlaces(user));
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [clear, setClear] = useState(false);

  onHandleFormSubmit = () => {
    if (!formatEmail.test(mail) || name === '' || message === '') {
      alert('Check the data entered');
    } else {
      const datos = {
        name: name,
        mail: mail,
        message: message,
      };

      dispatch(addMessage(datos));
      setMail('');
      setName('');
      setMessage('');
      setClear(true);
      setClear(false);
      alert('Message sent');
    }
  };

  const formatEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contact Form </Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textFormat}
          placeholder="enter name"
          onChangeText={(name) => setName(name)}
          value={!clear ? name : null}
        />

        <TextInput
          style={styles.textFormat}
          placeholder="enter you mail"
          onChangeText={(mail) => setMail(mail)}
          value={!clear ? mail : null}
        />

        <TextInput
          placeholder="enter your message"
          style={styles.textFormat}
          numberOfLines={4}
          onChangeText={(message) => setMessage(message)}
          value={!clear ? message : null}
        />
      </View>
      <Button title="Enviar" color={THEME.colors.primary} onPress={onHandleFormSubmit}></Button>
    </View>
  );
};

export default Contact;
