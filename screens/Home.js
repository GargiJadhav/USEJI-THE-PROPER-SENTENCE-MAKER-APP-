import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView ,SafeAreaView,
  Platform,StatusBar,  } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'

export default class Home extends Component {
  goToBirthdayScreen = () => {
    this.props.navigation.navigate('BirthdayScreen');
  }
  goToWeddingScreen = () => {
    this.props.navigation.navigate('WeddingScreen');
  }
  goToSorryScreen = () => {
    this.props.navigation.navigate('SorryScreen');
  }
  goToSchoolScreen = () => {
    this.props.navigation.navigate('SchoolScreen');
  }
  goToBossScreen = () => {
    this.props.navigation.navigate('BossScreen');
  }
  goToHelloScreen = () => {
    this.props.navigation.navigate('HelloScreen');
  }
  goToNoScreen = () => {
    this.props.navigation.navigate('NoScreen');
  }
  goToShortformsScreen = () => {
    this.props.navigation.navigate('Shortforms');
  }
  goToBackToSchoolScreen = () => {
    this.props.navigation.navigate('BackToSchool');
  }
  goToShortcutScreen=()=>{
    this.props.navigation.navigate('ShortcutScreen')
  }
  goToEmbarassment=()=>{
    this.props.navigation.navigate('Embarassment')
  }
  goToGiftScreen=()=>{
    this.props.navigation.navigate('GiftScreen')
  }

  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <ScrollView>
        <Text style={styles.appHeader}>USEJI</Text>
       
          <View style={styles.view1}>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToBirthdayScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/BirthdayImage.jpg')} />
            <Text style={styles.nameOfButton}>BIRTHDAY WISHES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToWeddingScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/anniversary.jpg')} />
            <Text style={styles.nameOfButton}>ANNIVERSARY WISHES</Text>
          </TouchableOpacity>
          </View>
            <View style={styles.view1}>
          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToSorryScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/SorryImage.jpg')} />
            <Text style={styles.nameOfButton}>APPOLOGISE SENTENCES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToSchoolScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/School.jpg')} />
            <Text style={styles.nameOfButton}>SCHOOL SENTENCES</Text>
          </TouchableOpacity>
 </View>
  
  <View style={styles.view1}>
          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToNoScreen() }}>
            <Image style={{width: 120, height: 120 }} source={require('../assets/NoImage.png')} />
            <Text style={styles.nameOfButton}>SAY NO POLITELY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToShortformsScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/Shortforms.jpg')} />
            <Text style={styles.nameOfButton}>ABBREVIATIONS</Text>
          </TouchableOpacity>
 </View>
 <View style={styles.view1}>
          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToBackToSchoolScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/BackToSchool.jpg')} />
            <Text style={styles.nameOfButton}>TIPS & TRICKS FOR KIDS </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToShortcutScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/Shortcut.jpg')} />
            <Text style={styles.nameOfButton}>SHORT CUT KEYS</Text>
          </TouchableOpacity>
 </View>
  <View style={styles.view1}>
          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToBossScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/Boss.png')} />
            <Text style={styles.nameOfButton}>SENTENCES USED INFRONT OF BOSS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToHelloScreen() }}>
            <Image style={{ width: 120, height: 120  }} source={require('../assets/HiImage.png')} />
            <Text style={styles.nameOfButton}>HELLO/HI IN DIFFERENT LANGUAGES</Text>
          </TouchableOpacity>
 </View>
 <View style={styles.view1}>
          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToEmbarassment() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/Embarassment.jpg')} />
            <Text style={styles.nameOfButton}>HOW TO BEHAVE IN EMBARSSAMENT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.BirthdayButton} onPress={() => { this.goToGiftScreen() }}>
            <Image style={{ width: 120, height: 120 }} source={require('../assets/GIFT.jpg')} />
            <Text style={styles.nameOfButton}>WHAT TO GIFT ANYONE </Text>
          </TouchableOpacity>
           </View>
           </ScrollView>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  appHeader: {
    fontSize: 70,
    color: "indigo",
    fontFamily: 'sans-serif',
     fontWeight: "bold",
    textAlign: "center",
    marginTop:20
  },
  nameOfButton: {
    fontSize: 18,
    color: 'crimson',
    fontFamily: 'sans serif',
     fontWeight: "bold",
    textAlign: "center",
  },
  BirthdayButton: {
    width: 120,
    height: 120,

  margin:30
  },
  view1: {
flexDirection:'row',
marginBottom:20,
marginTop:20
  },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
});
