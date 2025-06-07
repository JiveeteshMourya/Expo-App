import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from '@/screens/auth/Register';
import Login from '@/screens/auth/Login';

export type AuthStackParamList = {
    Register: undefined;
    Login: undefined;
} 
const AuthStack = () => {
    const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
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
    </Stack.Navigator>
  )
}

export default AuthStack;