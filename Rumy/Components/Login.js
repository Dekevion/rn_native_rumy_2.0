import React, {  Component  } from 'react'

import {View, TextInput, Text, StyleSheet, Image,
TouchableWithoutFeedback, SafeAreaView, Keyboard,
TouchableOpacity, KeyboardAvoidingView,Button}  from "react-native";
import Forms from "./Forms";
const Login = props => {
    return (
        <View>
            <Button style ={styles.tex} title={"Login"}>
            </Button>
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

