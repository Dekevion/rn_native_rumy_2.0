import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Login from "../Components/Login";
import Signup from "../Components/Signup"
const Home = () => {
    return (
        <View style ={styles.container}>
            <Text>
               Welcome to the home screen!
            </Text>
                <View style={styles.container}>
                    <StatusBar bar Style = "dark-content" hidden = {false} backgroundColor = "#80d8ff" translucent = {true}/>
                    <View>

                         <View style={styles.moveBoth}>
                             <Login style = {styles.moveFirst}/>
                             <Signup/>
                         </View>

                     </View>


                </View>
        </View>
    )
};

export default Home

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