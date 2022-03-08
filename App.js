import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListFood from "./container/ListFood";
import { over } from 'stompjs';
import SockJS from "sockjs-client";
import SearchBars from "./components/SearchBars";
import BannerFood from "./components/BannerFood";
import CategoryFood from "./components/CategoryFood";
import ListCategory from "./container/ListCategory";
import OrderFood from "./components/OrderFood";
import ListOrder from "./container/ListOrder";
import { Provider, useSelector } from "react-redux";
import { store } from "./shell/Module.shell";
let stompjs = null;
export default function App() {
  const [ip, setIp] = useState();
  
  useEffect(async () => {
    // const res = await axios.get('https://fakestoreapi.com/products');
    // console.log(res);
    // register();
    // getIp();
  }, []);
  const getIp = async () => {
    const res = await fetch('http://192.168.1.5:8080/');
    const data = res.json();
    Alert.alert('res', JSON.stringify(res));
  }
  const register = () => {
    let sockjs = new SockJS('http://192.168.31.209:8080/websocket')
    stompjs = over(sockjs);
    stompjs.connect({}, onConnect, onError);
  }
  const onConnect = () => {
    console.log('connected');
    stompjs.subscribe('/topic/test', (payload) => {
      console.log(payload.body + ': log here');
      Alert.alert(
        'Log message',

        JSON.stringify(payload.body)
      )
    })
  }
  const onError = (e) => {
    console.log(e);
  }
  const sendMessage = () => {
    stompjs.send('/app/private-message', {}, 'say hello')
  }
  const w = Dimensions.get('window').width * 0.6;
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ backgroundColor: '#f5f5f5' }}>
        <ScrollView>
          <View>
            <SearchBars />
            <BannerFood />
          </View>
          <ListCategory />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
              <ListFood category='Popular' />
              <ListFood category='Fast food' />
              <ListFood category='Fruit' />
            </View>
            <ListOrder />
          </View>
        </ScrollView>
        <StatusBar style="auto" />
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
