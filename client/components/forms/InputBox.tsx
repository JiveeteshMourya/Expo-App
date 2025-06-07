import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

interface InputBoxProps {
    inputTitle: string,
    autoComplete: any,
    keyboardType: KeyboardTypeOptions,
    secureTextEntry: boolean,
    value: string,
    setValue: (text: string) => void,
}

const InputBox = ({inputTitle, autoComplete, keyboardType, secureTextEntry, value, setValue}: InputBoxProps) => {
  return (
    <View>
      <Text>{inputTitle}: </Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
      />
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    color: "#af9f85",
    padding: 10,
  }
});