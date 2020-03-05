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
import { Container, Header, Content, Card, CardItem, Text, Body, Left,Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Router, Scene, Stack } from 'react-native-router-flux';
import AnimatedCard from './widgets/AnimatedCard';
import Dashboard from './widgets/Dashboard';

import { Actions } from 'react-native-router-flux';






export default class Home extends Component {

  

  onClickListener = (viewId) => {
    Actions.Tab()
  }


  render() {

  const processList = [
    {
        requestNum: '5678999',
        date : '2020-12-11' 
     },
     {
        requestNum: '78787878',
        date : '2020-12-10' 
     }

  ]
    return (

      <ImageBackground source={{uri: "https://pbs.twimg.com/media/C-5y_TMXYAIDm0x.jpg"}} style={{width: '100%', height: '100%'}}>
        {/* <View style={styles.container}><Text>Home page</Text></View> */}
        <Dashboard></Dashboard>
        <AnimatedCard></AnimatedCard>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});
