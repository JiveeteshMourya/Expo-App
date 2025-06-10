import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from '@/screens/auth/Register';
import Login from '@/screens/auth/Login';
import { AuthProvider } from '@/context/authContext';
import Home from '@/screens/Home';

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
} 
const AuthStack = () => {
    const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <AuthProvider>
      <Stack.Navigator 
        initialRouteName='Login'
      >
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </AuthProvider>
  )
}

export default AuthStack;