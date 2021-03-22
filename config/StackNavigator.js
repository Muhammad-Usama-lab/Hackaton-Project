import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/Login'
import Navigator from './Navigator'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();

const StackNav= () => {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="createaccount" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Navigator" component={Navigator} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  )
};
export default StackNav;