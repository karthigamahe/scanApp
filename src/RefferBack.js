import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight,Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {RNDocScanner} from 'rn-doc-scanner'

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
 
export default function RefferBack() {
 
  return (   
       <View style={styles.container}>

        <Text><Text style={styles.labelText}>Txrefno</Text>: SCW4871233908721212</Text>
        <Text><Text style={styles.labelText}>Status</Text>: Pending for PAN Card Approval</Text>

        <Text style={styles.scanText}>Click here to scan document</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.scanButton]} onPress={() => onPressScan('scan')}>
            <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableHighlight>
    </View>

  );
}
 
const styles = StyleSheet.create({
labelText: {
  fontSize : 20
},
container: {
  marginTop : 20,
    justifyContent: 'center',
    alignItems: 'center',



},
scene: {
    flex: 1,
},
scanText : {
  marginTop : 80,
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