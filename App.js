import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { over } from 'stompjs';
import SockJS from "sockjs-client";
import { Provider, useSelector } from "react-redux";
import { store } from "./shell/Module.shell";
import Home from "./container/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListFood from "./container/ListFood";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Router, Scene } from 'react-native-router-flux'
let stompjs = null;
export default function App() {
  useEffect(() => {
    //register();
    //sendMessage();
  }, [])
  const [value, setValue] = useState();
  const getIp = async () => {
    const res = await fetch('http://192.168.1.5:8080/');
    const data = res.json();
    Alert.alert('res', JSON.stringify(res));
  }
  const register = () => {
    let sockjs = new SockJS('http://192.168.31.209:8080/websocket')
    stompjs = over(sockjs);
    stompjs.debug = false;
    stompjs.connect({}, onConnect, onError);
  }
  const onConnect = () => {
    console.log('connected');
    stompjs.subscribe('/user/3/private', (payload) => {
      //console.log(payload.body + ': log s');
      setValue(payload.body);
    })
  }
  const onError = (e) => {
    console.log(e);
  }

  const id = 3;
  const sendMessage = () => {
    stompjs.send('/app/private-message/' + id, {},
      JSON.stringify([{ name: 'Hamburger "Wanted"', id: 1, quanity: 2 }]))
  }
  const Stack = createNativeStackNavigator();
  const arrCategory = ['Trending'];
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            {
              arrCategory.map((item, index) => (
                <Stack.Screen name={item} key={index} component={ListFood} />
              ))
            }
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    top: 0,
    height: 800,
    backgroundColor: 'rgb(244,242,252)',
  },
  btnAdd: {
    backgroundColor: '#f54260',
    color: 'black'
  }
});
