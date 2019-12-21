import React from 'react';

import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Login from "../Components/Login";
import Signup from "../Components/Signup"
const Home = () => {
    return (



        <View style ={styles.container}>

            <Text style={styles.welcome}>
               Welcome to Rumy
            </Text>
                <View>
                    <StatusBar bar Style = "dark-content" hidden = {false} backgroundColor = "#80d8ff" translucent = {true}/>
                    <View>

                         <View style={styles.moveBoth}>
                             <Login />
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

    welcome: {
        borderBottomWidth: 2,
        borderColor: 'black',
        fontSize: 25,
        margin: 20,

    },
    moveBoth: {
        margin: 15,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 100,
    },

});