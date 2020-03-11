/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  View,
  Text,
  Icon,
  StyleSheet
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Login from './src/Login';
import Home from './src/Home';
import TabMenus from './src/TabMenus';
import RefferBack from './src/RefferBack';
import ImageViewer from './src/ImageViewer';
import DashBoardList from './src/DashBoardList'
import AccountDetails from './src/AccountDetails';

import Congratulation from './src/Congratulation';

const myButton = (
  <Icon
    name="menu"
    backgroundColor="#3b5998"
  >
  </Icon>
);



export default class App extends Component {

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
  }
  
  render() {

    return (
   <Router navigationBarStyle={{ backgroundColor: "#e0e0e0",}} titleStyle={styles.navTitle}>

      <Scene key="root">

        <Scene key="scarlet" component={Login} title="ScaLT" initial/>
        <Scene key="Home" component={Home} title="Welcome Albin !!"/>
        <Scene key="AccDetails" component={AccountDetails} title="KYC"/>
        <Scene key="Tab" component={TabMenus} title="Action"/>
        <Scene key="ImageViewer" component={ImageViewer} title="Verification"/>
        <Scene key="Congratulation" component={Congratulation} title="Initiated"/>
        <Scene key="RefferBack" component={RefferBack} title="Refferal"/>
        <Scene key="ImageViewer" component={ImageViewer} title="ImageViewer"/>
        <Scene key="DashBoardList" component={DashBoardList} title="DashBoardList"/>


      </Scene>
  </Router>
  );


      }
}

const styles = StyleSheet.create({

  navTitle:{
  }
});


