import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
    View,
  TextInput,
  Button,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';


export default class Viewer extends Component {
    render() {

        return (
            <Image 
            style={ styles.image }
            resizeMode='contain'
            source={{uri:this.props.filePath}}
        />
        );
}
      
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue'
    },
  
    item: {
      flex: 1,
      overflow: 'hidden',
      alignItems: 'center',
      backgroundColor: 'orange',
      position: 'relative',
      margin: 10
    },
  
    image: {
      flex: 1
    }
  })