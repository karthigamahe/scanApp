import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class Viewer extends Component {


  constructor (props) {
    super(props)
    state = {
      otp: '',
      sessionId:'',
      mobileNo: props.mobileno
   };
    fetch('https://2factor.in/API/V1/b29d214d-5f09-11ea-9fa5-0200cd936042/SMS/'+props.mobileno+'/AUTOGEN')
    .then(response => response.json())
      .then((responseJson)=> {
      this.setState({
        sessionId: responseJson.Details
      })
      Alert.alert("Info", "OTP send successfully to "+this.props.mobileno);
      })
      .catch(error=>console.log(error))
 
   }


  onClickListener = () => {
     Actions.Congratulation();
      fetch('https://2factor.in/API/V1/b29d214d-5f09-11ea-9fa5-0200cd936042/SMS/VERIFY/'+this.state.sessionId+'/'+this.state.otp)
      .then(response => response.json())
      .then((responseJson)=> {
    
      if (responseJson.Status === 'Success'){
        Actions.Congratulation();
      }else{
        Alert.alert("OTP "+responseJson.Details);
      }

      })
      .catch(error=>console.log(error))
      
   }


  render() {
        return (
          <>
          <Text style={styles.preview}>Preview</Text>
          <Image 
          style={ styles.image }
          resizeMode='contain'
          source={{uri:this.props.filePath}} />
        <View style={styles.inputContainer}>
           <TextInput style={styles.inputs}
                 placeholder="OTP"
               keyboardType="phone-pad"
                underlineColorAndroid='transparent'
                onChangeText={(otp) => this.setState({otp:otp})}/>
         <Image style={styles.inputIcon} source={{uri:"https://img.icons8.com/android/24/000000/key.png"}}/>
         </View>
         <TouchableOpacity style={[styles.buttonContainer, styles.verifyButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
          </>
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
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:20,
      marginLeft:60,
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
  
    image: {
      flex: 1
    },
    preview:{
      fontSize:30,
      alignItems:'baseline',
      padding:10,
      marginLeft:130,
      color:"#2e7d32",
      fontWeight:"bold",
      justifyContent: 'center',
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      marginLeft:60,
      width:300,
      borderRadius:30,
      backgroundColor:'transparent'
    },
    verifyButton: {
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
    verifyText: {
      color: 'white',
    },
  })