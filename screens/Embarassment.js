import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ImageBackground,Clipboard,SafeAreaView,
  Platform,StatusBar } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from 'react-native-responsive-fontsize'

const SENTENCES = [
    "Jisne maze liye uske hi ulte maze le lo! ",
    "Wear makeup?! Ofcourse NOT!! Laugh It Out!! ",
    "Be funny,Be Daring and be as creative as possible...embarassment is only in your mind;it's not really happening",
    "Don’t take it personally. It's meant to be funny not mean",
    "Don't explain it! Just bite your nails",
    "Replace the topic by roasting others !",
    "Ignore IT",
    "Just say,ITS OK to your mind, we are humans and humans do mistakes",
    "Take A Chill Pill!! You can deal with it!!",
    "Try to see the funny side",
    "Agree TOO MUCH with their stupid question or statement with a poker face",
    "You should eat some makeup. That way you’ll at least be pretty on the inside.",
    "You’re cute when you open your mouth. You make funny noises when you try to sound cool.",
    "Too bad your brain isn’t as sharp as your tongue",
    "I think I’ve met all the stupid people in the world, but here I am",
   
]
export default class Embarassment extends Component {
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
 <Text style={styles.header}>Tips to behave in Embarassment😳 :</Text>

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

