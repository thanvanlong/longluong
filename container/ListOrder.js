import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, View, Text, FlatList } from 'react-native';
import NavFood from '../components/NavFood';
import OrderFood from '../components/OrderFood';
import { useSelector } from 'react-redux';
import { processListFood } from '../utils';
function ListOrder(props) {
    const [listFood, setListFood] = useState([])
    useSelector((state) => useEffect(() => {
        setListFood(state?.listFood);
    }, [state]))
    // console.log('list order re-render');
    // const originData = processListFood(listFood);
    
    // console.log(processListFood(listFood));
    const renderItem = ({ item }) => {
        return (
            <OrderFood item={item} listFood={listFood} />
        )
    }
    return (
        <View style={{ width: Dimensions.get('window').width * 0.3, marginHorizontal: 15, position: 'relative' }}>
            <NavFood category='Menu' />
            <FlatList
                data={listFood}
                renderItem={renderItem}
                horizontal={false}
                keyExtractor={item => item.id}
                numColumns={1}
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: Dimensions.get('window').width * 0.28,
                position: 'absolute',
                top: 700,
                left: 30
            }}>
                <Text style={{ fontSize: 25 }}>
                    Total:
                </Text>
                <Text style={{ fontSize: 25 }}>$3333</Text>
            </View>
        </View>
    )
}

export default React.memo(ListOrder)