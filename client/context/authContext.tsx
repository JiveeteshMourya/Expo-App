import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export interface AuthState {
    user: {
        name: string,
        email: string,
        password: string,
    },
    token: string,
}
export interface AuthContextType {
    state: AuthState;
    setState: React.Dispatch<React.SetStateAction<AuthState>>;
};

// context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// provider
const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    // global state
    const [state, setState] = useState<AuthState>({
        user: {
            name: '',
            email: '',
            password: '',
        },
        token: '',
    }); 

    // default axios setting
    axios.defaults.baseURL = "http://192.168.1.10:8080/api/v1";

    // initial local storage data
    useEffect(() => {
      const loadLocalStorageData = async() => {
        try {
            let data = await AsyncStorage.getItem('@auth');
            if(data) {
                let loginData = JSON.parse(data);
                setState({...state, user: loginData?.user, token: loginData?.token});
            }
        } catch(error) {
            console.error('Error loading auth data: ', error);
        }
      }
      loadLocalStorageData();
    });

    const contextValue: AuthContextType = {
        state,
        setState
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };