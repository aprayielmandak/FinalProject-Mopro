import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routers from './routers';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
