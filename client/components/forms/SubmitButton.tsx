import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface SubmitButtonProps {
    btnText: string,
    value: boolean,
    setValue: (type: boolean) => void,
    handleSubmit: () => any,
}
const SubmitButton = ({btnText, value, handleSubmit}: SubmitButtonProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>
            {value ? "Please wait..." : btnText}
        </Text>
    </TouchableOpacity>
  )
}

export default SubmitButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#1e2225',
        height: 50,
        marginHorizontal: 30,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400'

    }
});