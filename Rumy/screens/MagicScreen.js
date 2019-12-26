import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Image,
    TouchableWithoutFeedback, SafeAreaView, Keyboard,
    TouchableOpacity, KeyboardAvoidingView,Dimensions} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

class MagicScreen extends Component {
    render() {
        function getLocation () {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        }, error => console.log(error))

        }


        return (
            <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>

            <View style={styles.container}>

                <Text style={styles.tex}>
                    Where the Magic Happens!
                </Text>


                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.moveButton}>
                        <Text style={styles.editButton} onPress={() => getLocation()}>Fetch Location</Text>
                    </View>
                </TouchableOpacity>


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
        tex: {
            fontFamily: 'LilitaOne-Regular',
            color: "#ffffff",
            marginVertical: 50
        },
    editButton: {
        backgroundColor: '#Fffafa',
        height: 30,
        borderRadius: 50,
        textAlign: 'center',
        fontSize: 20,
        justifyContent:'center',
        padding: 1
    },

});
export default MagicScreen;