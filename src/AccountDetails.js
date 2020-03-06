import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class AccountDetails extends Component {

  constructor(props) {
    super(props);
    state = {
            mobileno:'',
            accNo:''
        }
  }

  onClickListener = () => {
   //Alert.alert("Alert", "Button pressed "+this.state.mobileno);
   Actions.Tab(this.state);

  }

  render() {
    return (
    <ImageBackground blurRadius={3} source={{uri: "https://pbs.twimg.com/media/C-5y_TMXYAIDm0x.jpg"}} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.details}> Enter the Details</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Account number"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(accNo) => this.setState({accNo:accNo})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/android/24/000000/user.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Reg Mobile number"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(mobileno) => this.setState({mobileno:mobileno})}/>
          <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/android/24/000000/touchscreen-smartphone.png"}}/>
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
        {/* disabled={(this.state.mobileno && this.state.mobileno!=='')?false:true} */}
          <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   //backgroundColor: '#DCDCDC',
  },
  details:{
    fontSize:20,
    alignItems:'baseline',
    padding:10,
    color:"white",
    fontWeight:"bold"
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:15,
    height:15,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
}); 