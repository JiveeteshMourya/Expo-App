import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import InputBox from '@/components/forms/InputBox';
import SubmitButton from '@/components/forms/SubmitButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginProps {
    navigation: any,
}

const Login = ({navigation}: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if(!email || !password) {
                Alert.alert("Please fill all the fields");
                setLoading(false);
                return;
            }
            const {data} = await axios.post('http://192.168.1.10:8080/api/v1/auth/login', {email, password}); // replace "localhost" with your ip address when using emulator (ek hi device se req aur us se hi res nhi hota)
            await AsyncStorage.setItem("@auth", JSON.stringify(data));
            Alert.alert(data && data.message);
            console.log("Login Data => ", {email, password});
            setLoading(false);
        } catch(err: any) {
            Alert.alert(err.response.data.message);
            setLoading(false);
            console.log(err);
        }
    }
    
    // temp function to check local storage data
    const getLocalStorageData = async () => {
        let data = await AsyncStorage.getItem('@auth');
        console.log('Local Storage => ', data);
    };
    getLocalStorageData();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{marginHorizontal: 20}}>
        <InputBox 
            inputTitle={"Email"}
            autoComplete={"email"}
            keyboardType={"email-address"}
            secureTextEntry={false}
            value={email}
            setValue={setEmail}
        />
        <InputBox 
            inputTitle={"Password"}
            autoComplete={"password"}
            keyboardType={'default'}
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
        />
      </View>
      <SubmitButton 
        btnText='Login' 
        value={loading} 
        setValue={setLoading}
        handleSubmit={handleSubmit}
    />
    <Text style={styles.linkText}>
        New User? &nbsp;
        <Text 
            style={styles.link} 
            onPress={() => navigation.replace('Register')}
        >
            Register
        </Text>
    </Text>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e1d5c9",
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1e2225",
        marginBottom: 20,
        marginTop: 60,
    },
    linkText: {
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        color: 'blue',
    }
});