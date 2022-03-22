import React, { useState } from 'react'
import { ScrollView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuFood from './MenuFood'
import { StatusBar } from 'expo-status-bar';
import ContentFood from './ContentFood';

function Home({navigation}) {
    console.log('re');
    
    return (
        <SafeAreaProvider style={{ backgroundColor: '#f5f5f5' }}>
            <ScrollView>
                <MenuFood navigation={navigation} />
                <ContentFood navigation={navigation} />
            </ScrollView>
            <StatusBar style="auto" hidden={true} />
        </SafeAreaProvider>
    )
}

export default React.memo(Home)