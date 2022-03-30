import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground,Clipboard,SafeAreaView,
  Platform,StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from 'react-native-responsive-fontsize'

const SENTENCES = [
    "For Bestfriend -> As you have lived for (-) years so here (-) many slaps for you!",
    "For Close Friend -> Watches , Flowers , Birthday Cake , Cadbury Celebrations  ",
    "For Friend -> Tickets for amuzement park , movie , concert , A hot air balloon ride",
    "For Anniversary -> Personalized gifts like - Jewellery, Wallets , Photoframes , Perfumes , Travel Bags , Wine Bottle , Mini Portable Projector",
    "For Female Friends -> Hoodies, Sweatshirt, Makeup Products , Coffee Mugs , Phone Covers , Dress , Jwellery Box",
    "For Male Friends -> Wallets , Dad Hats , Deodrant and Toothbrush , Sport Watch , Shirt/T-Shirt ",
    "For Coworkers -> Laptop Bag , Bento Box , Essential Oil Box for Stress Buster , Power Bank , Desktop Vacuum cleaner,Dried Fruit Gift Basket , Phone Sanitizer , Cold Beer Coats ",
    "For Farewell -> Personalized Mugs with nice quote(At work , you are the solution to all the problems and questions . Thanks for being our boss) , Personalized Pop Art Wooden Frame , Sleek Stainless Steel Bottles ",
    "For Parents -> Amazon Basics Neck and Back Massager , Metabolism Assay Kit(To measure Blood Sugar, Insulin , Pressure), Automatic Ice-cream , Yogurt Maker , Alexa , Coffee Maker , Microwave , Jewellery , Lightweight Travel Blanket , Pair of Rocking Chairs , Garden Tool and Tote Set and Sapplings , Mini Portable Projector",
    "For Cuchiko Couples -> Personalized Jigsaw Puzzle , Personalized LED Bottle Lamp , Couple Watches , Romantic Sculptures  ",
    "For Cute Babies -> Baby Bath Tub , Musical Toys , Baby shower gifts , Tricyles",
    
]
 export default class GiftScreen extends Component {
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
 <Text style={styles.header}>What to Gift anyone🤔  :</Text>

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

