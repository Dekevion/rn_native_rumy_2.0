import React, {  Component  } from 'react'
import Animated from "react-native-reanimated";
import {TapGestureHandler,State} from "react-native-gesture-handler";
import {View, TextInput, Text, StyleSheet, Image,
TouchableWithoutFeedback, SafeAreaView, Keyboard,
TouchableOpacity, KeyboardAvoidingView,Button, TouchableOpacityComponent}  from "react-native";
import Forms from "./Forms";

class Login extends Component  {
    constructor() {
        super();

    }
    render() {
        return (

            <TouchableOpacity activeOpacity={0.8}>
                <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                    <View style={styles.moveButton}>
                        {/*<Button title={"Login"} style={styles.editButton}>*/}
                        {/*</Button>*/}
                        <Text style={styles.editButton}>Login</Text>
                    </View>
                </TapGestureHandler>

            </TouchableOpacity>

        )
    }
};
const styles = StyleSheet.create({

    moveButton: {
        marginRight: "35%",
        width: 150,
        marginHorizontal: "33%",

    },
    editButton: {

        backgroundColor: '#Fffafa',
        height: 30,
        borderRadius: 50,
        width: '100%',
        textAlign: 'center',
        fontSize: 20
    }

});
export default Login;

