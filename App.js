import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/Auth/SignInScreen'
import Product from './screens/ProductScreen';

const Stack = createStackNavigator();

export default class App extends React.Component { 
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Dewsanda Natural Product' }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Product" component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
}