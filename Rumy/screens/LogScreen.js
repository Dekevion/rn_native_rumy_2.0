import React, {  Component  } from 'react'

import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView} from "react-native";
import Forms from "../Components/Forms";
const LogScreen = props => {
    return (
        <View style = {styles.container}>
            <Text style ={styles.tex}>
                Routed Log Screen(Form)
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    tex: {
        fontSize: 25,
        color: "#ffffff",
    },
    container: {
        flex: 1,
        backgroundColor: '#62717b',
        alignItems:'center',
        justifyContent: 'center'

    },
});
export default LogScreen;

