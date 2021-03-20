import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../Login/LoginStyle';
import {hp, wp} from '../../reusable/Responsive/dimen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';

export default function Splash({navigation}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tokenReducer);

  let buffer;
  if (data.loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.loading}>{buffer}</View>
      <Text>Loading</Text>
    </View>
  );
}
