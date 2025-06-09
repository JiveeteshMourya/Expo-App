import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import InputBox from '@/components/forms/InputBox';
import SubmitButton from '@/components/forms/SubmitButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RegisterProps = {
    navigation: any,
}
const Register = ({navigation}: RegisterProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if(!name || !email || !password) {
                Alert.alert("Please fill all the fields");
                setLoading(false);
                return;
            }
            const {data} = await axios.post('http://192.168.1.10:8080/api/v1/auth/register', {name, email, password}); // replace "localhost" with your ip address (ek hi device se req aur us se hi res nhi hota)
            await AsyncStorage.setItem("@auth", JSON.stringify(data));
            Alert.alert(data && data.message);
            console.log("Register Data => ", {name, email, password});
            setLoading(false);
        } catch(err: any) {
            Alert.alert(err.response.data.message);
            setLoading(false);
            console.log(err);
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{marginHorizontal: 20}}>
        <InputBox 
            inputTitle={"Name"}
            autoComplete={undefined}
            keyboardType={"default"}
            secureTextEntry={false}
            value={name}
            setValue={setName}
        />
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
      {/* <Text>{JSON.stringify({name, email, password}, null, 4)}</Text> */}
      <SubmitButton 
        btnText='Register' 
        value={loading} 
        setValue={setLoading}
        handleSubmit={handleSubmit}
    />
    <Text style={styles.linkText}>
        Already Registered? &nbsp;
        <Text 
            style={styles.link} 
            onPress={() => navigation.navigate('Login')}
        >
            Login
        </Text>
    </Text>
    </SafeAreaView>
  )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#e1d5c9",

    },
    pageTitle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1e2225",
        marginBottom: 20,
        marginTop: 40,
    },
    linkText: {
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        color: 'blue',
    }
});