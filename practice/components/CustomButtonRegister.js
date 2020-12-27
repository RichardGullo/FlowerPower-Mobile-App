import React, { useState } from 'react';
import {StyleSheet, View, Text, Modal,Button, Image, ImageBackground, StatusBar,TouchableOpacity, Platform} from 'react-native';
import Color from '../constants/colors'
import { useNavigation } from '@react-navigation/native';

function CustomButtonRegister(props)
{
  const navigation = useNavigation();

    return (
        <TouchableOpacity 
        onPress = {() => 
        {
            props.onAddUser();
        }}

        style = {{width:'100%',zIndex:1}}
      >
        <View style = {{
            backgroundColor:'#a5dfb2', 
            height:50, 
            justifyContent:'center',alignItems:'center',
        }}>

          <Text style = {{fontSize:25, color:'white'}}>{props.label}</Text>
        </View>
      </TouchableOpacity >
    )
}

export {CustomButtonRegister}



