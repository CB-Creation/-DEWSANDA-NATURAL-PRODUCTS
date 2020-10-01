import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Provider } from 'react-redux';
import SignInScreen from './screens/Auth/SignInScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome To Our Home Page</Text>
    </View>
  );
}
<Stack.Navigator
            screenOptions={{
              headerTintColor: '#fff',
              headerStyle:{
                backgroundColor: "#0071bd",
                height:80,
              },
            }}>
</Stack.Navigator>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
