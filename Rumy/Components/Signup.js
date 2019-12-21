import React, {  Component  } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView} from "react-native";
import Forms from "./Forms";
import SignupScreen from "../screens/SignupScreen";
const Login = props => {


    return (
        <View>
            <Text style ={styles.tex}>
                Signup
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