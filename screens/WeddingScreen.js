import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground,Clipboard,SafeAreaView,
  Platform,StatusBar } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize'
import Ionicons from "react-native-vector-icons/Ionicons";
const SENTENCES = [
    "Wishing a perfect pair a perfectly happy day. Happy Anniversary",
    "“Happy Anniversary, with all my love, to the strongest, kindest, funniest, best couple I know.”",
    "Warm anniversary wishes to two dear friends who mean so much",
    "A big anniversary to celebrate a big, big love",
    "I wish you all the very best as you begin another year of your life together. Happy Anniversary",
    "A love like yours lasts! Happy Anniversary!",
    "May your Love continue to be the light that illuminates your lives! Best greetings and happy Anniversary!",
    "The Dynamic Duo gets another chance to celebrate. Happy Anniversary my friend!",
    "Greetings and best wishes to you two for sharing sunsets and dreams. Happy Anniversary!",
    "You two were made for each other. Congratulations!",
    "May the freshness of your Love always stay the same! Happy wedding anniversary!",
    "You are the perfect match; you make us believe in Love and marriage. Happy wedding anniversary!",
    "May you two continue to spread the radiance of Love and wisdom to all around you! Happy Anniversary to both of you.",

]
export default class WeddingScreen extends Component {
goToHome=()=>{
  this.props.navigation.navigate('Home');
}
copyToClipboard = async (sentences) => {
  await Clipboard.setString(sentences);
  alert("The sentence is Copied 👍 ");
  
};
  render(){
  
  return (
    <View style={styles.container}>
 <SafeAreaView style={styles.droidSafeArea} />
 <Text style={styles.header}>Anniversary Sentences🤵👰 :</Text>

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
