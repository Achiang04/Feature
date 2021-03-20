import React from 'react';
import {View, Text} from 'react-native';
import styles from './AllScreenStyle';
import Button from '../../reusable/Button/Button';

export default function AllScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Screen</Text>
      <Button press={() => navigation.navigate('Maps')} text={'Maps'} />
      <Button
        press={() => navigation.navigate('LazyLoads')}
        text={'Lazy Loads'}
      />
      <Button
        press={() => navigation.navigate('SuccessLogin')}
        text={'Logout'}
      />
    </View>
  );
}
