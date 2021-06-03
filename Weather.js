import React from 'react';
import propTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient} from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const weatherOptions = {

    Rain: {
        iconName: 'rainy',
        gradient: ['#000046','#1CB5E0']
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55']
    },
    Drizzle: {
        iconName: 'cloud-drizzle',
        gradient: ['#3a7bd5', '#3a6073']
    },
    Snow: {
        iconName: 'snow',
        gradient: ['#83a4d4', '#b6fbff']
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#bdc3c7', '#2c3e50']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b']
    },
    Clear: {
        iconName: 'sunny',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED']
    }

}

export default function weather({temp, condition}){

    return (

        
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={96} color = 'white'  /> 
                <Text style={styles.temp}>{temp}°</Text> 
            </View>
            <View style={styles.halfContainer}>
                
            </View>
        </LinearGradient>
        
    );
}

weather.propTypes = {
    
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow","Fog", "Mist", "Clear", "Clouds", "Haze", "Smoke"]).isRequired

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'        
    }
})