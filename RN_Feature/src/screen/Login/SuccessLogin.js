import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginStyle';
import {useDispatch, useSelector} from 'react-redux';

export default function SuccessLogin({navigation}) {
  const dispatch = useDispatch();

  const keluar = async () => {
    const token = await AsyncStorage.removeItem('token');
    dispatch({type: 'GET_TOKEN_SUCCESS', token: token});
  };

  return (
    <View>
      <Text>Succes login</Text>
      <TouchableOpacity style={styles.button} onPress={() => keluar()}>
        <Text>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}
