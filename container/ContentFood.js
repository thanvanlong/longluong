import React from 'react';
import { View } from 'react-native';
import ListFood from './ListFood';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildContent from './ChildContent';
function ContentFood() {
    const Stack = createNativeStackNavigator();
    const arrCategory = ['Popular', 'Fast Food', 'Fruit'];
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ChildContent' component={ChildContent} />
                {
                    arrCategory.map((item, index) => (
                        <Stack.Screen name={item} key={index} component={ListFood} />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ContentFood