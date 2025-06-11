import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/context/authContext'
import FooterMenu from '@/components/Menus/FooterMenu';

const Home = () => {
    // global state
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Auth context must be used within AuthProvider");
    }
    const { state } = context;
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <FooterMenu/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "space-around",
    padding: 10,
    marginTop: 10,
  }
});