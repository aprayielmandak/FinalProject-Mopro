import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import CreateAccount from '../pages/CreateAccount';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BouquetFlower"
        component={BouquetFlower}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BouquetCharacter"
        component={BouquetCharacter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BouquetMoney"
        component={BouquetMoney}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Card"
        component={Card}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pappers"
        component={Pappers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ribbons"
        component={Ribbons}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
