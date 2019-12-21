import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Login from "./Components/Login";
import Title from "./Components/Title";
import Signup from "./Components/Signup"


import SignupScreen from "./screens/SignupScreen";
import LogScreen from "./screens/LogScreen";
import Home from "./screens/Home";
import {createBottomTabNavigator} from "react-navigation-tabs";
// WRAP OUTER STACK IN A CONTAINER
const HomeStack = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
});
const Bottom = createBottomTabNavigator({
    HomeStack,
    LogScreen: {
        screen: LogScreen,
    },
    SignupScreen: {
        screen: SignupScreen
    }
});
const Navigation = createAppContainer(Bottom);

const App = () => {

    return (

        <Navigation/>
    //     <View style={styles.container}>
    //         <StatusBar bar Style = "dark-content" hidden = {false} backgroundColor = "#80d8ff" translucent = {true}/>
    //
    //         <View>
    //             <Title />
    //
    //             <View style={styles.moveBoth}>
    //                 <Login style = {styles.moveFirst}/>
    //                 <Signup/>
    //             </View>
    //
    //         </View>
    //
    //
    //
    //     </View>
    //
    );
};
export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#62717b',
        alignItems:'center',
        justifyContent: 'center'

    },
    moveBoth: {
        padding: 10,
    },


});


