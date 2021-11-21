import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
import SumComponent from './components/SumComponent';
// import { connect } from 'react-redux';

import Tung from './components/tung';
export default class Main extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Demo rn redux
                </Text>

                <SumComponent />

                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Năng</Text>
                    <Text style={[styles.text, {fontSize: 50, fontWeight: 'bold'}]}>0</Text>
                </View>
                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Bảo</Text>
                    <Text style={[styles.text, {fontSize: 50, fontWeight: 'bold'}]}>0</Text>
                </View>
                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Tùng</Text>
                    <Tung/>
                </View>
                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Linh</Text>
                    <Text style={[styles.text, {fontSize: 50, fontWeight: 'bold'}]}>0</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a726',
        height: '100%',
    },
    title:{
        marginTop: 20,
        color: 'black',
        textTransform: "uppercase",
        fontSize: 25,
        fontWeight: 'bold',
    },
    rectangle:{
        borderColor: 'black',
        borderWidth: 2,
        width: 250,
        height: 100,
    },
    text:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    line:{
        width: 1,
        height: 20,
        borderWidth:1,
    },
});
