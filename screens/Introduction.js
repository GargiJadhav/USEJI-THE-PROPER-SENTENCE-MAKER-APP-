import React, { Component,useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Button,ImageBackground,SafeAreaView,
  Platform,StatusBar } from "react-native";
import {RFValue} from 'react-native-responsive-fontsize'

export default class Introduction extends Component {
constructor(props){
  super();
  this.state={
    modalVisible:'false',
    setModalVisible:'false'
  }
}
  goToHomeScreen=()=>{
  this.props.navigation.navigate('Home')
}
 
render(){
  return (
    <View style={styles.container}>
     <SafeAreaView style={styles.droidSafeArea} />
 <Text style={styles.appHeader}>USEJI</Text>
  <Text style={styles.appInfo}>The proper sentence maker app</Text>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This app would help you to find proper sentences for wishing birthday wishes , wedding wishes , appologise sentences , sentences used in school , sentences used in front of Boss , To Greet Hi/Hello in other languages and so on...</Text>
           
              <Button onPress={this.goToHomeScreen} title="Continue"  color="crimson" />
           
          </View>
        </View>
      </Modal>
  

    </View>
 
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"skyblue"
  },
    appHeader:{
    fontSize:60,
     fontWeight: "bold",
    textAlign: "center",
    color:'indigo'
  },
  appInfo:{
  fontSize:20,
     fontWeight: "bold",
    textAlign: "center",
    color:'indigo'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "indigo",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  textStyle: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
     color: "white",
    fontWeight: "bold",
    fontSize:20
   
  },
    droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

});

