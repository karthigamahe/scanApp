import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,Keyboard,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class AccountDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
            item:props.item,
            mobileno:'',
            accNo:'',
            clientFound:false,
            clients: [
              {
                key:0,
                accNo:"1234567890",
                accName:"Albin Jenith",
                mob:"8148871377"
              },{
                key:1,
                accNo:"1122334455",
                accName:"Vikram Senthil",
                mob:"8870597212"
              },{
                key:2,
                accNo:"2233445566",
                accName:"Sakthivel Kumar",
                mob:"9659592420"
              },{
                key:3,
                accNo:"3344556677",
                accName:"Karthiga B",
                mob:"8344122778"
              },{
                key:4,
                accNo:"5566778899",
                accName:"Elavarasn AP",
                mob:"7845232153"
              }
            ]

        }
  }

  onClickVerify = () => {
    Keyboard.dismiss();
    var found=false;
    this.state.clients.map((client)=>{
    
      if (client.accNo === this.state.accNo){
        found=true;
        //this.state.mobileno= client.mob;
        this.setState({clientFound:true,encymob:client.mob.substring(7,10),mobileno:client.mob, accName:client.accName})
      }
    });

    if(!found){
      Alert.alert("Info", "Customer not found.");
    }

  }

  onClickNext = () => {
     Actions.Tab(this.state);
  }

  render() {
    return (
    <ImageBackground blurRadius={3} source={{uri: "https://pbs.twimg.com/media/C-5y_TMXYAIDm0x.jpg"}} style={{width: '100%', height: '100%'}}>
        
    <View style={styles.container}>
    <Text style={styles.details}> {this.state.item.name}</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Account number"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              disabled={this.state.clientFound}
              onChangeText={(accNo) => this.setState({accNo:accNo,clientFound:false})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/android/24/000000/user.png'}}/>
        </View>
        
        {this.state.clientFound?<View>
        <View style={styles.info}>
          <Text style={styles.infodetails}>Account Number : {this.state.accNo}</Text>
          <Text style={styles.infodetails}>Account Holder Name : {this.state.accName}</Text>
          <Text style={styles.infodetails}>Mobile Number : XXXXXXX{this.state.encymob}</Text>
        </View>
        <View style={styles.nextBox}>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} 
        onPress={() => this.onClickNext()}>
          <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity></View>
        </View>: <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} 
        onPress={() => this.onClickVerify()}>
          <Text style={styles.loginText}>Verify</Text>
        </TouchableOpacity>}
      </View>
      </ImageBackground>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  nextBox:{
    padding:10
  },
  details:{
    fontSize:25,
    paddingTop:50,
    paddingBottom:50,
    color:"white",
    fontWeight:"bold"
  },
  info:{
    borderRadius:10,
    borderColor:"white",
    borderWidth:2,
    padding:20,
    backgroundColor:"#e0e0e0"
  },
  infodetails:{
    fontSize:15,
    padding:2,
    //color:"white",
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