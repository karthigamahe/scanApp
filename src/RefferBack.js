import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight,Text,Image} from 'react-native';
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
         <Text><Text style={styles.labelText}>DocumentType</Text>: Application Document</Text>
        <TouchableHighlight style={[styles.buttonContainer]} onPress={() => onPressScan('scan')}>
          <Image style={styles.scanImage} source={require('./images/scan-icon.png')} />
        </TouchableHighlight>

    </View>

  );
}
 
const styles = StyleSheet.create({
labelText: {
  fontSize : 20,

},
container: {
  marginTop : 20,
  marginLeft : 10    

},
scene: {
    flex: 1,
},
scanText : {
  marginTop : 80,
        color: 'grey',
  },
buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
scanImage: {
   marginTop : 420,
    marginLeft: 310,
  width: 70,
  height:70,
  borderRadius: 150/2,
},
});