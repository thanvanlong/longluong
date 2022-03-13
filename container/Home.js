import React from 'react'
import { ScrollView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListFood from './ListFood';
import ListCategory from './ListCategory';
import SearchBars from '../components/SearchBars';
import BannerFood from '../components/BannerFood';
import ListOrder from './ListOrder';
import { StatusBar } from 'expo-status-bar';

function Home({navigation}) {
    const arrCategory = ['Popular', 'Fast Food', 'Fruit'];
    return (
        <SafeAreaProvider style={{ backgroundColor: '#f5f5f5' }}>
            <ScrollView>
                <View>
                    <SearchBars />
                    <BannerFood />
                </View>
                <ListCategory />
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View>
                        {arrCategory.map((item, index) =>(
                            <ListFood category={item} 
                            key={index} 
                            handleNav={() => navigation.navigate(item, {name: item, check: true})} 
                            />
                        ))}
                    </View>
                    <ListOrder />
                </View>
            </ScrollView>
            <StatusBar style="auto" hidden={true} />
        </SafeAreaProvider>
    )
}

export default Home