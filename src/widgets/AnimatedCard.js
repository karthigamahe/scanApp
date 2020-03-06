import React, { Component } from 'react';

import {Icon } from 'native-base';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Craigslist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Address Change request", desc:"This requires customers account number and mobile number to proceed change request"},
        {id:2,  name: "Mobile No Change request",desc:"This requires customers account number and mobile number to proceed change request"} ,
        {id:3,  name: "Pan Change request", desc:"This requires customers account number and mobile number to proceed change request"} ,
        {id:4,  name: "Aadhar number addition",desc:"This requires customers account number and mobile number to proceed change request"} ,
        {id:5,  name: "Passport entry", desc:"This requires customers account number and mobile number to proceed change request"} ,
      ]
    };
  }

  clickEventListener = (item) => {
    Actions.AccDetails()
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: 'https://img.icons8.com/color/48/000000/activity-history.png'}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                {/* <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Request Now</Text>  
                </TouchableOpacity> */}
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:10,
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:5,
    marginTop:10,
  },
  image:{
    //paddingTop:10,
    width:50,
    height:40,
  //  borderRadius:30,
    borderWidth:2,
   //borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: 8,
    marginRight: 8,
    marginTop:20,
    backgroundColor:"#1769aa",
    padding: 10,
    paddingBottom:40,
    flexDirection:'row',
    borderRadius:10,
  },

  name:{
    fontSize:20,
    flex:1,
    color:"#eceff1",
    fontWeight:'bold'
  },
  desc:{
    fontSize:14,
    flex:1,
    color:"white"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
   // backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
    backgroundColor:'#2196F3'
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  