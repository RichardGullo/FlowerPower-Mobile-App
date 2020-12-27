import React, { useState,useContext, useEffect, } from 'react';
import {StyleSheet, View, Text, Modal,Button, Image, ImageBackground, StatusBar,TouchableOpacity, ScrollView,Platform, TextInput} from 'react-native';
import { Input } from 'react-native-elements';
import { DialogueBox } from '../components/DialogueBox';
import {Header} from '../components/Header'
import {SubText} from '../components/SubText'
import Color from '../constants/colors'
import {CustomButton} from '../components/CustomButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GlobalContext } from '../context/GlobalContext';
import {CustomButtonLogin} from '../components/CustomButtonLogin'

function Login({navigation}) 
{
  const {usersContext, currentUserContext} = useContext(GlobalContext);
  const [users, setUsers] = usersContext;
  const [currentUser, setCurrentUser] = currentUserContext;

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [userError, setUserError] = useState(false);
  

  function checkUserCredentialsHandler()
  {
    for(let i = 0; i < users.length; i++)
    {
      if(usernameInput == users[i].username && passwordInput == users[i].password)
      {
        console.log("We found a match");
        setCurrentUser({username:users[i].username,password:users[i].password, email:users[i].email});
        navigation.navigate("HomeStack");
        setUsernameInput("");
        setPasswordInput("");
        return;
      }

      
    }

    setUserError(true);

    console.log("We didn't find a match");

  }

  return(

    <KeyboardAwareScrollView contentContainerStyle = {{flexGrow:1}}>
      {/* Main Container - purple */}
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
                  paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                  marginBottom:10,
                  width:'80%'
                }}
              placeholderTextColor = 'black'
              onChangeText = {(text) => {setUsernameInput(text); setUserError(false)}}
              value = {usernameInput}
              
          />

          <TextInput 
              placeholder = "Password"
              style = {{
                  textAlign:'center', 
                  borderColor:'#a5dfb2', borderWidth:2,borderRadius:5,
                  backgroundColor:'white',
                  paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                  width:'80%',
                  marginBottom:10
                }}
              placeholderTextColor = 'black'
              onChangeText = {(text) => {setPasswordInput(text);setUserError(false);}}
              value = {passwordInput}
              secureTextEntry={true}
        />

              {userError && <Text style = {{color:'red'}}>*Invalid Login</Text> }
        <CustomButtonLogin label = "Log in" onCheckUserCredentials = {checkUserCredentialsHandler} />
      
        
        </View>

        

        {/* Secondary Container Footer - Blue */}
        <View style = {styles.secondaryContainerFooter} >

          {/* Footer Container - Red*/}
          <View style = {styles.footerContainer}>

            {/* Footer Content Container - Green */}
              <View style = {styles.footerContentContainer}>
                  <View style = {{alignItems:'center'}}>
                  <Text>Don't have an account? <Text style ={styles.plantLabel} onPress = {() => navigation.navigate("Register")}>Sign up here.</Text></Text>
                  <Text style ={styles.plantLabel} onPress = {() => navigation.navigate("ForgotPassword")}>Forgot your password?</Text>
                  </View>
                  <View style = {{alignItems:'center'}}>
                  <Text>By continuing, you're accepting our</Text>
                  <Text><Text style ={styles.plantLabel}>Terms of Service </Text> and <Text style ={styles.plantLabel}>Private Policy</Text></Text>
                  </View>
            </View>

            {/* <Button title = "Output" onPress = {() => checkUserCredentialsHandler()} />
            <Button title = "Users" onPress = {() => console.log(users)} /> */}

          </View>
          <Image source = {require('../assets/footer.png')} style = {{}} />
          
        </View>
      </View>
      
    </KeyboardAwareScrollView>
    
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
    height:270
  },
  headerContainer:{
    position:'absolute', 
    // borderWidth:5, borderColor:'red',
    alignItems:'center',
    justifyContent:'flex-end', 
    width:'100%',height:'100%'
  },
  formContainer:{
    marginTop:10, marginBottom:10, 
    alignItems:'center', 
    width:'80%',
    // borderWidth:5, borderColor:'dodgerblue',
    height:200,
  },
  imgContainer:{
    // borderWidth:5, borderColor:"teal"
  },
  secondaryContainerFooter:{
    justifyContent:'flex-end', 
    // borderWidth:5, borderColor:'blue',
    height:Platform.OS === 'ios' ? 0 :195,
    flex:Platform.OS === 'ios' ? 1 : 0,
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

export {Login}