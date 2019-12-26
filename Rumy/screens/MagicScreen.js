import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView,Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

class MagicScreen extends Component {
    render() {
        return (
            <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>

            <View style={styles.container}>

                <Text>
                    Where the Magic Happens!
                </Text>
            </View>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            // backgroundColor: '#212121',
            alignItems:'center',
            justifyContent: 'center',
        },

});
export default MagicScreen;