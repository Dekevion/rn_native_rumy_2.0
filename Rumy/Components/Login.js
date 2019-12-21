import React, {  Component  } from 'react'

import {View, TextInput, Text, StyleSheet, Image,
TouchableWithoutFeedback, SafeAreaView, Keyboard,
TouchableOpacity, KeyboardAvoidingView} from "react-native";
import Forms from "./Forms";
const Login = props => {
    return (
        <View>
            <Text style ={styles.tex}>
                Login
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    tex: {
        color: "#ffffff",
        fontSize: 25,
    }
});
export default Login;

