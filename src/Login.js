import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId:'',
      password:''
    }
   
  }

  onClickListener = (viewId) => {  
    if (this.state.userId === "" || this.state.password=== "") {
     Alert.alert('Warning','Enter user ID/password.')
   }  
   else if (this.state.userId === '5500056' && this.state.password==='123') {
      return Actions.Home();
    }
    else{
      Alert.alert('Authentication Failed')
    }   
  }

  render() {
    return (
        <ImageBackground source={{uri: "https://pbs.twimg.com/media/C-5y_TMXYAIDm0x.jpg"}} style={{width: '100%', height: '100%'}}>

      <View style={styles.container}>
          <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4DmfmVewn6grwsrTlQLRSp_mLySGj_ADwgSX_rfQmZSK7tUe6'}}/>
          <TextInput style={styles.inputs}
              placeholder="User Id"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(userId) => this.setState({userId})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://banner2.cleanpng.com/20190204/hyx/kisspng-computer-icons-password-portable-network-graphics-user-dashboard-5c57ecf8a47e61.7758533815492661686738.jpg'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
{/*
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>*/}
      </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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