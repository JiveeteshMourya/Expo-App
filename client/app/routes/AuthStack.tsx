import React from 'react';
import { AuthProvider } from '@/context/authContext';
import ScreenMenu from '@/components/Menus/ScreenMenu';

const AuthStack = () => {
  return (
    <AuthProvider>
      <ScreenMenu/>
    </AuthProvider>
  )
}

export default AuthStack;