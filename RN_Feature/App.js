import React from 'react';

import StackScreen from './src/route/stack/StackScreen';
console.disableYellowBox = true;

import {Provider} from 'react-redux';
import store from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackScreen />
    </Provider>
  );
}
