import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function AllScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>All a Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate('Maps')}>
        <Text>Maps</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    alignItems: 'center',
  },
});
