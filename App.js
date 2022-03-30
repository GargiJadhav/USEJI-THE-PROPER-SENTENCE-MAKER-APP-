import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Introduction from './screens/Introduction'
import Home from './screens/Home'
import BirthdayScreen from './screens/BirthdayScreen'
import WeddingScreen from './screens/WeddingScreen';
import SorryScreen from './screens/SorryScreen'
import SchoolScreen from './screens/SchoolScreen';
import BossScreen from './screens/BossScreen'
import HelloScreen from './screens/HelloScreen'
import NoScreen from './screens/NoScreen'
import Shortforms from './screens/Shortforms'
import BackToSchool from './screens/BackToSchool';
import ShortcutScreen from './screens/ShortcutScreen'
import Embarassment from './screens/Embarassment'
import GiftScreen from './screens/GiftScreen'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
 
  Home: Home,
  BirthdayScreen: BirthdayScreen,
  WeddingScreen: WeddingScreen,
  SorryScreen:SorryScreen,
  SchoolScreen:SchoolScreen,
  BossScreen:BossScreen,  
  HelloScreen:HelloScreen,
  NoScreen:NoScreen,
  Shortforms:Shortforms,
  BackToSchool:BackToSchool,
  ShortcutScreen:ShortcutScreen,
  Embarassment:Embarassment,
  GiftScreen:GiftScreen,
   Introduction: Introduction,
})

const AppContainer = createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});
