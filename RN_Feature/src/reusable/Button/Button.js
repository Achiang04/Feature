import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.press}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
