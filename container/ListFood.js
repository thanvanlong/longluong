import React from 'react';
import { Dimensions, FlatList, ListViewBase, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import CardFood from '../components/CardFood'
import NavFood from '../components/NavFood';
const arr = [
    {
        id: 1,
        name: 'Burger "wanted"'
    },
    {
        id: 2,
        name: 'Burger "wanted"'
    },
    {
        id: 3,
        name: 'Burger "wanted"'
    },
    {
        id: 4,
        name: 'Burger "wanted"'
    },
    {
        id: 5,
        name: 'Burger "wanted"'
    },
    {
        id: 6,
        name: 'Burger "wanted"'
    },
    {
        id: 7,
        name: 'Burger "wanted"'
    },
    {
        id: 8,
        name: 'Burger "wanted"'
    },
    {
        id: 9,
        name: 'Burger "wanted"'
    },
    {
        id: 10,
        name: 'Burger "wanted"'
    },
    {
        id: 11,
        name: 'Burger "wanted"'
    },
    {
        id: 12,
        name: 'Burger "wanted"'
    },
    {
        id: 13,
        name: 'Burger "wanted"'
    },
    {
        id: 14,
        name: 'Burger "wanted"'
    },
    {
        id: 15,
        name: 'Burger "wanted"'
    },
    {
        id: 16,
        name: 'Burger "wanted"'
    },
    {
        id: 17,
        name: 'Burger "wanted"'
    },
    {
        id: 18,
        name: 'Burger "wanted"'
    },
    
];
const arr2 = arr.slice(0,4);
function ListFood(props) {
    const { category, handleNav } = props;
    const { route } = props;
    const renderItems = ({ item }) => {
        return (
            <CardFood name={item.name} id={item.id} />
        );
    }
    
    return (
        <>
            {route?.params?.check === true ?
                <View style={{ height: 1000, width: Dimensions.get('window').width  }}>
                    <FlatList
                        data={arr}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        initialNumToRender={1}
                        numColumns={1}
                        style={{ backgroundColor: '#FAF9FB', paddingBottom: 50 }}
                    />
                </View> :
                <View style={{ height: 380, width: Dimensions.get('window').width * 0.65 }}>
                    <NavFood category={category} handleNav={handleNav} />
                    <FlatList
                        data={arr}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ backgroundColor: '#FAF9FB' }}
                    />
                </View>}

        </>
    );
}

export default ListFood;
