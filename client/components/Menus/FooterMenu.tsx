import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FooterMenu = () => {
  return (
    <View style={styles.footerContainer}>
        <TouchableOpacity>
            <FontAwesome5 name='home' style={styles.iconStyle}/>
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome5 name='plus-square' style={styles.iconStyle}/>
            <Text>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome5 name='info-circle' style={styles.iconStyle}/>
            <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome5 name='user' style={styles.iconStyle}/>
            <Text>Account</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FooterMenu

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 20,
    },
});