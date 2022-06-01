import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class RideHistoryScreen extends Component
{
  render()
  {
    return(
      <View style = {styles.container}>
          <Text style = {styles.text}>History Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: 
{
  flex : 1,
  backgroundColor : "yellow",
  alignItems : "center",
  justifyContent : "center"
},
text : 
{
  color : "red",
  fontSize : 25,
}
});