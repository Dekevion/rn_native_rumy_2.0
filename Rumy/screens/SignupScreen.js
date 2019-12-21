import React, {  Component  } from 'react'

import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView} from "react-native";
import Forms from "../Components/Forms";
const SignupScreen = props => {
    return (
        <View style = {styles.container}>
            <Text style ={styles.tex}>
                Routed Signup Screen
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#62717b',
        alignItems:'center',
        justifyContent: 'center'

    },
});
export default SignupScreen;