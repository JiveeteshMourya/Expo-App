import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '@/screens/auth/Register';
import Login from '@/screens/auth/Login';
import Home from '@/screens/Home';
import { AuthContext } from '@/context/authContext';
import HeaderMenu from './HeaderMenu';


export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
} 

const ScreenMenu = () => {
    // global state
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Auth context must be used within AuthProvider");
    }
    const { state } = context;

    // auth condition
    const authenticatedUser = state?.user && state?.token // state && state.token => state?.token


    const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator 
        initialRouteName='Login'
    >
        {authenticatedUser ? 
            (<>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "RN Post Crud App",
                        headerRight: () => <HeaderMenu/>
                    }}
                />
            </>) : (<>
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
            </>)
        }
    </Stack.Navigator>
  )
}

export default ScreenMenu