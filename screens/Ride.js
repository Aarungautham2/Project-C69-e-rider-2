import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class RideScreen extends Component
{
  constructor()
  {
    super();
    this.state = {
      domState : "normal",
      hasCameraPermissions : null,
      scanned : false,
      scannedData : ""
    };
  }

 getCameraPermissions = async (mode) =>
  {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      domState : mode, 
      hasCameraPermissions : status === "granted",
      scanned : false,
    });
  }

  handleBarcodeScanner = async ({type,data}) =>
  {
    this.setState({
      domState : "normal",
      scanned : true,
      scannedData : data
    });
  }
  render()
  {
    const {hasCameraPermissions,scannedData,domState,scanned} = this.state ;
    if (domState === "scanner")
    {
      return(
       <BarCodeScanner
          onBarCodeScanned = {scanned ? undefined : this.handleBarcodeScanner}
          style = {StyleSheet.absoluteFillObject}
       />
      );
    }
    return(
      <View style = {styles.container}>
          <Text style = {styles.text}>
            {hasCameraPermissions ? scannedData : "Request for camera permission"}
          </Text>
          <TouchableOpacity 
            style = {styles.button}
            onPress = {() => {this.getCameraPermissions("scanner")}}
          >
              <Text style = {styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: 
{
  flex : 1,
  backgroundColor : "orange",
  alignItems : "center",
  justifyContent : "center"
},
text :
{
  alignItems : "center",
  justifyContent : "center",
  fontSize : 20
},
buttonText : 
{
  color : "green",
  fontSize : 20,
},
button :
{
  width : '50%', 
  height : 50,
  justifyContent : "center",
  alignItems : "center",
  backgroundColor : "white",
  borderRadius : 15,
  marginTop : 50
}
});