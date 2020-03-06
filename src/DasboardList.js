import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight,Text,ImageBackground} from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body, Left, Button,Right } from 'native-base';

import { Actions } from 'react-native-router-flux';
import {RNDocScanner} from 'rn-doc-scanner'


const processRefferBackList = [
{
    requestNum: 'SCW4875656565578999121',
    date : '2020-12-11',
    status : 'pending'
 },
 {
    requestNum: 'SC10856566557899978787878',
    date : '2020-12-10' ,
     status : 'pending'
 }

]
export default function RefferBack() {
 
  return (   
      <ImageBackground blurRadius={3} source={{uri: "https://pbs.twimg.com/media/C-5y_TMXYAIDm0x.jpg"}} style={{width: '100%', height: '100%'}}>

    <Container>
        <Content>
        {
          processRefferBackList.map((process, index) => ( 
          <TouchableHighlight >
            <Card style={styles.cardContainer}>
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
              </CardItem>          
            </Card>
          </TouchableHighlight>

          ))
      }       
        </Content>
    </Container>
</ImageBackground>


  );
}
 
const styles = StyleSheet.create({
labelText: {
  fontSize : 20
},
container: {
  marginTop : 20,
},
scene: {
    flex: 1,
},
scanText : {
      color: 'grey',
  },
buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    borderRadius : 10
},
scanButton: {
    backgroundColor: "#4BB543",
},
scanButtonText: {
    color: 'white',
},
});