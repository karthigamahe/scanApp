import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight,Text} from 'react-native';

 

 
export default function RefferBack() {
 
  return (   
       <View style={styles.container}>

        <Text><Text style={styles.txRefText}>TxRefNo</Text>: SCW4871233908721212</Text>

        <Text style={styles.scanText}>Click here to scan document</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.scanButton]} onPress={() => this.onClickListener('scan')}>
            <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableHighlight>
    </View>

  );
}
 
const styles = StyleSheet.create({
txRefText: {
  fontSize : 100
}
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