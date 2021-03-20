import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AllScreen from '../../screen/AllScreen/AllScreen';
import Maps from '../../screen/Maps/Maps';
import LazyLoads from '../../screen/LazyLoads/LazyLoads';
import Login from '../../screen/Login/Login';
import SuccessLogin from '../../screen/Login/SuccessLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {hp, wp} from '../../reusable/Responsive/dimen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tokenReducer);

  const getToken = async () => {
    try {
      const result = await AsyncStorage.getItem('token');
      // console.log('token result', result);
      dispatch({type: 'GET_TOKEN_RESTORE', token: result});
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  if (data.loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={'black'} size={wp(100)} />
      </View>
    );
  }

  // console.log('token di stack', token);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {data.token === null ? (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen name="AllScreen" component={AllScreen} />
            <Stack.Screen name="Maps" component={Maps} />
            <Stack.Screen name="LazyLoads" component={LazyLoads} />
            <Stack.Screen name="SuccessLogin" component={SuccessLogin} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
