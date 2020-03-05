import React, { Component } from 'react';
import {
  TouchableHighlight
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Button,Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Router, Scene, Stack } from 'react-native-router-flux';

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
       <Container>
        <Content>
        {
          processList.map((process, index) => ( 
          <TouchableHighlight  onPress={() => this.onClickListener('login')}>
            <Card>
                <CardItem>
                  <Body>
                    <Text>
                    {process.requestNum}
                    </Text>
                  </Body>
                </CardItem>
                 <CardItem>
                <Left>
                    <Text> {process.date}</Text>
                </Left>
                <Right>
                  <Text>Pending</Text>
                </Right>
              </CardItem>          
            </Card>
          </TouchableHighlight>

          ))
      }       
        </Content>
      </Container>
    );
  }
}
