import React, { useState, useContext } from 'react';
import {StyleSheet, View, Text, Modal,Button, Image, ImageBackground, StatusBar,TouchableOpacity, TextInput, ScrollView,Platform} from 'react-native';
import { Input } from 'react-native-elements';
import { DialogueBox } from '../components/DialogueBox';
import {Header} from '../components/Header'
import {SubText} from '../components/SubText'
import Color from '../constants/colors'
import {CustomButton} from '../components/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GlobalContext } from '../context/GlobalContext';
import { CustomButtonRegister } from '../components/CustomButtonRegister';

function Register({navigation}) 
{
  const {usersContext} = useContext(GlobalContext);
  const [users, setUsers] = usersContext;

  const [usernameInput, setUserNameInput] = useState("");
  const [emailAddressInput, setEmailAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");


  function addUserHandler()
  {
    console.log(usernameInput);
    console.log(emailAddressInput);
    console.log(passwordInput);
    console.log(confirmPasswordInput);

    let userObject = {username:usernameInput, password:passwordInput, email:emailAddressInput}

    setUsers(currentUsers => [...currentUsers, userObject]);

    navigation.navigate("Login");
  }
  return(
    <KeyboardAwareScrollView contentContainerStyle = {{flexGrow:1}}>
      {/*// Main Container - purple */}
      <View style = {styles.mainContainer}>
        <StatusBar barstyle = "dark-content" hidden = {false} backgroundColor = {Color.theme} translucent = {true}/>

        {/* Secondary Container Header - Blue */}
        <View style = {styles.secondaryContainerHeader}>
          <Image source = {require('../assets/header.png')} />

          {/* Header Container - Red */}
          <View style = {styles.headerContainer}>
              <Header />
              <SubText> Sign in below or create an account to get started tracking your garden today.</SubText>
          </View>
        </View>
        
        {/* Form Container -  DodgerBlue*/}
        <View style = {styles.formContainer}>

        <TextInput 
              placeholder = "Username"
              style = {{
                  textAlign:'center', 
                  borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,
                  backgroundColor:'white', 
                  paddingVertical:Platform.OS === 'ios' ? 10: 3
              }}
              placeholderTextColor = 'black'
              onChangeText = {(text)=>setUserNameInput(text)}
              value = {usernameInput}
          />

          <TextInput 
              placeholder = "Email Address"
              style = {{
                textAlign:'center', 
                borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,
                backgroundColor:'white', 
                paddingVertical:Platform.OS === 'ios' ? 10: 3
            }}
              placeholderTextColor = 'black'
              onChangeText = {(text)=>setEmailAddressInput(text)}
              value = {emailAddressInput}
        />

          <TextInput 
              placeholder = "Password"
              style = {{
                textAlign:'center', 
                borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,
                backgroundColor:'white', 
                paddingVertical:Platform.OS === 'ios' ? 10: 3
            }}
              placeholderTextColor = 'black'
              onChangeText = {(text)=>setPasswordInput(text)}
              value = {passwordInput}
        />

          <TextInput
              placeholder = "Confirm Password"
              style = {{
                textAlign:'center', 
                borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,
                backgroundColor:'white', 
                paddingVertical:Platform.OS === 'ios' ? 10: 3
            }}
              placeholderTextColor = 'black'
              onChangeText = {(text)=>setConfirmPasswordInput(text)}
              value = {confirmPasswordInput}
        />
        
        
        <CustomButtonRegister label = "SIGN UP" onAddUser = {addUserHandler}/>

        </View>

        {/* Secondary Container Footer - Blue */}
        <View style = {styles.secondaryContainerFooter} >

          {/* Footer Container - Red*/}
          <View style = {styles.footerContainer}>

            {/* Footer Content Container - Green */}
              <View style = {styles.footerContentContainer}>
                  <View style = {{alignItems:'center', paddingBottom:20}}>
                    <Text>Already have an account? <Text style = {styles.plantLabel} onPress = {() => navigation.navigate("Login")}>Login here</Text></Text>
                  </View>
                  <View style = {{alignItems:'center'}}>
                    <Text>By continuing, you're accepting our</Text>
                    <Text><Text style ={styles.plantLabel}>Terms of Service </Text> and <Text style ={styles.plantLabel}>Private Policy</Text></Text>
                  </View>

                  {/* <Button title = "Add User" onPress = {() => addUserHandler()} />
                  <Button title = "Current Users" onPress = {() => console.log(users)} /> */}


            </View>
          </View>
          <Image source = {require('../assets/footer.png')} style = {{}} />
        </View>
      </View>
  
    </KeyboardAwareScrollView >
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
    // borderWidth:5, borderColor:'blue', 
    alignItems:'center', 
    height:200
  },
  headerContainer:{
    position:'absolute', 
   //  borderWidth:5, borderColor:'red',
    alignItems:'center',
    justifyContent:'flex-end', 
    width:'100%',height:'100%'
  },
  formContainer:{
    width:'80%',
    marginTop:10,
    // borderWidth:5, borderColor:'dodgerblue',
    justifyContent:'space-between',
    flex:1
  },
  imgContainer:{
    borderWidth:5, borderColor:"teal"
  },
  secondaryContainerFooter:{ 
    justifyContent:'flex-end', 
    // borderWidth:5, borderColor:'blue',
    height:220
  },
  footerContainer:{
    position:'absolute',
    zIndex:1,
    width:'100%', height:'100%', 
    alignItems:'center',
    // borderWidth:5, borderColor:'red'
  },
  footerContentContainer:{
    paddingTop:10,
    // borderWidth:5, borderColor:'green'
  },
  plantLabel:{
    color:Color.darkGreen, 
    textDecorationLine:'underline'
}
})

export {Register}