import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function Splash({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.splashFont}>Find your Gadget</Text>

            <Image style={styles.image} source={require('../images/sally.png')} />

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.button}>Get Started</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6350FF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain'
    },

    splashFont: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 65,
        fontFamily: "Raleway"
    },

    button: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5956E9',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 60
    }
})