import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './LoginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {hp, wp} from '../../reusable/Responsive/dimen';
import {useDispatch, useSelector} from 'react-redux';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('ucup@gmail.com');
  const [password, setPassword] = useState('ucup01');
  const [loading, setLoading] = useState(false);

  const authAction = async (email, password) => {
    setLoading(true);
    // remember = false;
    try {
      const response = await Axios.post(
        // 'http://promit.omindtech.id/api/v1/auth/login',
        'https://vet-booking.herokuapp.com/user/login',
        {
          email,
          password,
          // remember,
        },
      );
      // console.log('login', response);
      await AsyncStorage.setItem('token', response.data.access_token);
      dispatch({type: 'GET_TOKEN_SUCCESS', token: response.data.access_token});
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Masuk</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.inputan}
        placeholder={'email'}
        onChangeText={(e) => setEmail(e)}
        value={email}
      />
      <TextInput
        style={styles.inputan}
        placeholder={'password'}
        onChangeText={(e) => setPassword(e)}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => authAction(email, password)}>
        <Text>{buffer}</Text>
      </TouchableOpacity>
    </View>
  );
}
