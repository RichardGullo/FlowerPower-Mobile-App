import React, { useState } from 'react';
import {StyleSheet, View, Text, Modal,Button, Image, ImageBackground, StatusBar,TouchableOpacity, ScrollView} from 'react-native';
import { Input } from 'react-native-elements';
import { DialogueBox } from '../components/DialogueBox';
import {Header} from '../components/Header'
import {SubText} from '../components/SubText'
import Color from '../constants/colors'
import {CustomButton} from '../components/CustomButton'

function ResetPassword({navigation}) 
{
  return(
    <ScrollView contentContainerStyle = {{flexGrow:1}}>
      {/* // Main Container - purple */}
      <View style = {styles.mainContainer}>
        <StatusBar barstyle = "dark-content" hidden = {false} backgroundColor = {Color.theme} translucent = {true}/>

        {/* Secondary Container Header - Blue */}
        <View style = {styles.secondaryContainerHeader}>
          <Image source = {require('../assets/header.png')} />

          {/* Header Container - Red */}
          <View style = {styles.headerContainer}>
              <Header />
              <SubText>
                 You may now reset your password. Enter your new password below
              </SubText>
          </View>
        </View>
        
        {/* Form Container -  DodgerBlue*/}
        <View style = {styles.formContainer}>

        <Input 
              placeholder = "New Password"
              style = {{textAlign:'center', borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,backgroundColor:'white'}}
              placeholderTextColor = 'black'
          />

      <Input 
              placeholder = "Confirm Password"
              style = {{textAlign:'center', borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,backgroundColor:'white'}}
              placeholderTextColor = 'black'
          />

        <CustomButton label = "RESET" />

        </View>

        {/* Secondary Container Footer - Blue */}
        <View style = {styles.secondaryContainerFooter} >

          {/* Footer Container - Red*/}
          <View style = {styles.footerContainer}>

            {/* Footer Content Container - Green */}
              <View style = {styles.footerContentContainer}>
                  <View style = {{alignItems:'center'}}>
                  <Text style = {styles.plantLabel} onPress = {() => navigation.navigate("Login")}>Return to login</Text>
                  </View>
            </View>
          </View>
          <Image source = {require('../assets/footer.png')} style = {{}} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1, 
    // borderWidth:5, borderColor:'purple',
    backgroundColor:Color.background,
    alignItems:'center'
  },
  secondaryContainerHeader:{
    marginTop:Platform.OS === 'ios' ? 0 : 11,
    //  borderWidth:5, borderColor:'blue', 
    alignItems:'center', 
    height:300
  },
  headerContainer:{
    position:'absolute', 
  //  borderWidth:5, borderColor:'red',
    alignItems:'center',
    justifyContent:'flex-end', 
    width:'100%',height:'100%'
  },
  formContainer:{
    marginTop:10, marginBottom:10, 
    alignItems:'center', 
    width:'80%',
    // borderWidth:5, borderColor:'dodgerblue',
    flex:2
  },
  imgContainer:{
    borderWidth:5, borderColor:"teal"
  },
  secondaryContainerFooter:{
    justifyContent:'flex-end', 
   // borderWidth:5, borderColor:'blue',
    height:165
  },
  footerContainer:{
    position:'absolute',
    zIndex:1,
    width:'100%', height:'100%', 
    alignItems:'center',
   // borderWidth:5, borderColor:'red'
  },
  footerContentContainer:{
  // borderWidth:5, borderColor:'green'
  },
  plantLabel:{
    color:Color.darkGreen, 
    textDecorationLine:'underline'
}
})

export {ResetPassword}