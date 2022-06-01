import React, {Component} from 'react';
import RideScreeen from '../screens/Ride';
import RideHistoryScreeen from '../screens/RideHistory';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component
{
  render()
  {
    return(
      <NavigationContainer>
        <Tab.Navigator>
         <Tab.Screen name = "Ride" component = {RideScreeen}/>
         <Tab.Screen name = "RideHistory" component = {RideHistoryScreeen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}