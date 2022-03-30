import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground,Clipboard,SafeAreaView,
  Platform,StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from 'react-native-responsive-fontsize'
const SENTENCES = [
    "Padhlo Beta Padhlo, abhi bhi Mauka hai!",
    "Common cheer up! You will see your crush again!",
    "Subah Jaldi Utho !",
    "Haan Haan sahi padha! School khul gaye! Ab jao!",
    "Don't Worry! Naak Nahi behe raha hai tumhara!! School Jao Chup-Chap ",
    "Don't Forget to pack your school bag properly!",
    "Don't trouble your mom for making your favourite dishes ",
    "Don't forget to maintain Social Distancing!",
    "Don't Be a Troublemaker to your Teacher",
    "Congratulations for getting back to school!! Now you will be enjoying the summer vacation like a real vacation!!",
    "School bells are ringing loud and clear ; vacation's over , school is here",
    "HEY YOU!! This was your life 2 years ago now Have it Back!!",
    "Finally your parents will be happy as you will bid farewell to your Smart Phones!!",
    "Sending the kids back-to-school makes me want to cry but tears of joy !!",

]
export default class BackToSchoolScreen extends Component {
goToHome=()=>{
  this.props.navigation.navigate('Home');
}
copyToClipboard = async (sentences) => {
  await Clipboard.setString(sentences);
  alert("The sentence is Copied 👍");
  
};
  render(){
  
  return (
    <View style={styles.container}>
 <SafeAreaView style={styles.droidSafeArea} />
 <Text style={styles.header}>Tips and Tricks for Offline School🏫  :</Text>

 <FlatList
        data={SENTENCES}
        style={styles.flatList}
        
        keyExtractor={(item, index) => index.toString()}
        renderItem={(sentences) => {
          return (
            <View style={styles.listItem}>
              <Text style={styles.flatListText}>{sentences.item}</Text>
             <TouchableOpacity onPress={() => this.copyToClipboard(sentences.item) }>
             <Ionicons
                  name={"copy"}
                  size={RFValue(30)}
                  color={"indigo"}
                />
                </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{this.goToHome()}}>
      <Text style={styles.buttonName}>Back</Text>
      </TouchableOpacity>

    </View>
  );
  }
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:'skyblue'
 },
 listItem:{
   borderWidth:3,
  margin:10
  
 },
 flatListText:{
   fontSize:25,
    fontWeight: "bold",
    textAlign: "center",
   color:'indigo',
   
 },
 header:{
   fontSize:40,
    fontWeight: "bold",
    textAlign: "center",
   color:'navy',
 marginTop:20
 },
 button:{
   backgroundColor:'midnightblue',
     width:200,
   height:40,
   justifyContent:'center',
   alignItems:'center',
  marginTop:RFValue(10),
  marginLeft:RFValue(60),
  marginBottom:RFValue(10),
  borderRadius:250
 },
 buttonName:{
   color:'white',
     justifyContent:'center',
   alignItems:'center',
   fontSize:30,
  
 },
   droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

});
