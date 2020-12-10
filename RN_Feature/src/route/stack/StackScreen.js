import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllScreen from '../../screen/AllScreen';
import Maps from '../../screen/Maps';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AllScreen" component={AllScreen} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
}
