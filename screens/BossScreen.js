import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground,Clipboard,SafeAreaView,
  Platform,StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {RFValue} from 'react-native-responsive-fontsize'

const SENTENCES = [
    "I am emailing to request a deadline extension on the market research project. Accessing the correct sources has taken longer than I anticipated. I believe the delay will result in a more accurate and comprehensive report.",
    "I am writing to request an extension on the deadline for the web application development project that I am currently working on. While I have finished the design and coding, the testing and debugging is taking longer than I anticipated.",
    "Thanks for giving me that feedback – it's really useful to hear.",
    "It was my mistake. I am sorry. I will be careful next time",
    "I wanted to talk to you about a certain issue. Can you spare some time?",
    "How can I help on this project?",
    "I am formally writing to you to request a review of my salary. I believe that my work, apart from my commitment to the company, justifies a raise in my salary. ",
    "I am going to leave a bit early today",
    "I do believe that my work, apart from my commitment to (Workspace Name), justifies a raise in my salary.So, I would like to request an increment of a minimum of 22% increment in my salary.",
    "I just want to request that provide me with a day off for tomorrow.",
    "I admire your leadership and decision-making skills",
    "You are a fantastic Boss! Thank you for always supporting me, teaching me, and sticking up for me.",
    "I have learned so many important lessons from you. Thank you for helping me improve my leadership skills and abilities. You’re a fantastic Boss and teacher.",

]
export default class BossScreen extends Component {
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
 <Text style={styles.header}>Sentences used infront of BOSS👿 :</Text>

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
