import React from 'react';
import { Dimensions, FlatList, ListViewBase, ScrollView, View } from 'react-native';
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
    }
];
function ListFood(props) {
    const { category, id } = props;
    const renderItems = ({ item }) => {
        return (
            <CardFood name={item.name} id={item.id} />
        );
    }
    //useSelector((state) => console.log(state?.listFood))
    return (
        <View style={{height: 380, width: Dimensions.get('window').width*0.65}}>
            <NavFood category={category}/>
            <FlatList
                data={arr}
                renderItem={renderItems}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{backgroundColor: '#FAF9FB'}}
            />
        </View>
    );
}

export default ListFood;
