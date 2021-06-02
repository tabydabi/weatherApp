import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';


const apiKey = 'e7f78180f3b6842db147956350f8fab3'


export default class extends React.Component {

  state = {

    isLoading: true
  }

  getLocation = async () =>{
    try {
         await Location.requestForegroundPermissionsAsync()
        
          const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
          this.setState({isLoading: false}); 
          //сделать запрос к API
    } catch (error) {
      Alert.alert('Не могу определить геопозицию');
    }

  }



  componentDidMount(){
    this.getLocation();

    
  }
 
  render() {
    const {isLoading} = this.state;
    return(
     isLoading ? <Loading /> : null
    );
  };
}

