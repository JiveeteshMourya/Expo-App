import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/context/authContext'

const Home = () => {
    // global state
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Auth context must be used within AuthProvider");
    }
    const { state } = context;
  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(state, null, 4)}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})