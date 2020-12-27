import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function Test() {

  const[username, setUsername] = useState("Richard123");
  const[password,setPassword] = useState("Password123!");

  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  let num = 0;

  // Function that loads data from database
  async function loadData()
  {
    
    num = 5;

    const response = await fetch(API_URL, {
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          username: username,
          password:password
      })
  });
    const result =  await response.json();

    if(response.status === 200)
    {
      console.log("Success"); 
    }
    else if(response.status === 400)
    {
      console.log("Unsuccessful");
    }
    else
    {
      console.log("Test error");
    }
    console.log(result);
  }



  // Donald's Test Function
  async function grabData(){

    num = 5;

    const response = await fetch('https://myflowerpower.net/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });

    const body = await response.text();

    if(response.status === 200)
    {
      const {AccessToken} = JSON.parse(body);
      console.log("Successful Login");
      console.log(AccessToken);
    }
    else if(response.status === 400)
    {
      console.log("unsucessful login");
    }
    else
    {
      console.log("Not logged in due to incorrect input");
    }
    
    console.log(body);

  }


  return (
    <View style = {{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
    }}>
      <Text>Click Button to Fetch Data</Text>
      <Button title = "Fetch from Online Fake API" onPress = {() => {
        console.log("Grabbing Data"); 
        loadData();
      }} 
      />
      <Button title = "Fetch from Donald API" onPress = {() => {
        console.log("Grabbing Data"); 
        grabData();
      }} 
      />
    </View>
  );
}
