import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight,Text} from 'react-native';

 

 
export default function RefferBack() {
 
  return (   
       <View style={styles.container}>

        <Text><Text style={styles.labelText}>Txrefno</Text>: SCW4871233908721212</Text>
        <Text><Text style={styles.labelText}>Status</Text>: Pending for PAN Card Approval</Text>

        <Text style={styles.scanText}>Click here to scan document</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.scanButton]} onPress={() => this.onClickListener('scan')}>
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