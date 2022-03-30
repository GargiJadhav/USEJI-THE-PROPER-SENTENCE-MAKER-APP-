import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground,Clipboard,SafeAreaView,
  Platform,StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from 'react-native-responsive-fontsize'
const SENTENCES = [
    "Dear Sir, I’ve read through the textbook chapter and it still doesn’t make sense to me. Could you please explain it to me during a free period some time this week?",
    "Dear Miss, I’ve attempted some of the homework questions and I just don’t know where to start. Could I meet up with you this week so you can explain it to me?",
    "Sir, Do you have any more Unit 1 practice papers? I’ve finished the two you already gave us in class. Thanks",
    "Do you have a sharpener I could borrow?",
    "Can you lend me your eraser?",
    "Could I borrow your notebook? Would you mind lending it to me until tomorrow? I have to take some notes",
    "Hi Dear, could I have my notebook back, Please? I need it.",
    "I’m applying for graduate programs and hoped you’d write a letter of recommendation for me.",
    "Could you please grand me two days leave due to some personal emergency at home.",
    "Excuse me Mam/ Sir Can you explain it once more, please?",
    "If it might be possible, could you grant me additional time for the  assignment",
    "I'm so sorry for the background noises. May I please put myself on mute?",
  

]

export default class SchoolScreen extends Component {
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
 <Text style={styles.header}>School Sentences🎒 :</Text>

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
