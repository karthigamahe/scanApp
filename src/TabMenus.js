import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight,Text,TouchableOpacity, Platform } from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body, Left, Button,Right } from 'native-base';

import { TabView, SceneMap } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { RNDocScanner } from 'rn-doc-scanner'



const NewRoute = (props) => 

{
  const onPressScan = async () => {
    console.log('scanmodule')
 
    if (Platform.OS === 'android') {
        try {
            const image = await RNDocScanner.getDocumentCrop(true)
            console.log(image)
            console.log('caliing image')
            Actions.ImageViewer({filePath:image})
            } catch (err) {
            console.log(err)
            }
        }
    }
    return (
    <View style={styles.container}>
        <Text style={styles.scanText}>Click here to scan document</Text>
        <TouchableOpacity  style={[styles.buttonContainer, styles.scanButton]} onPress={onPressScan}>
            <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableOpacity >
    </View>
    )
}



const processPendingList = [
{
    requestNum: 'SCW4875656565578999121',
    date : '2020-12-11',
    status : 'pending'
 },
 {
    requestNum: 'SC10856566557899978787878',
    date : '2020-12-10',
    status : 'pending'
 }

]

const processCompletedList = [
{
    requestNum: 'SCW4875656565578999121',
    date : '2020-12-11',
    status : 'completed'
 },
 {
    requestNum: 'SC10856566557899978787878',
    date : '2020-12-10' ,
     status : 'completed'
 }

]
const PendingRoute = () => (
<Container>
    <Content>
    {
      processPendingList.map((process, index) => ( 
      <TouchableHighlight  onPress={() => onClickListener('login')}>
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
 
const CompleteRoute = () => (
  <Container>
    <Content>
    {
      processCompletedList.map((process, index) => ( 
      <TouchableHighlight  onPress={() => onClickListener('login')}>
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
const initialLayout = { width: Dimensions.get('window').width };

onClickListener = (viewId) => {
    Actions.RefferBack()
}
export default function TabMenus() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'New' },
    { key: 'second', title: 'Reffer Back' },
    { key: 'third', title: 'Complete' },
  ]);
 
  const renderScene = SceneMap({
    first: NewRoute,
    second: PendingRoute,
    third : CompleteRoute,
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 120
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
    marginTop : 20,
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