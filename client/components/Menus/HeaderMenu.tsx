import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/context/authContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HeaderMenu = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Auth context must be used within AuthProvider");
    }
    const { setState } = context;

    // logout
    const handleLogout = async () => {
        setState({
            user: {
                name: '',
                email: '',
                password: '',
            },
            token: '',
        });
        await AsyncStorage.removeItem('@auth');
        alert('Logout Successfully');
    }
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome5 name="sign-out-alt" style={styles.logoutStyle}/>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderMenu

const styles = StyleSheet.create({
    logoutStyle: {
        fontSize: 20,
        color: "red",
    },
})