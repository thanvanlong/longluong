import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodOrdered } from '../store/Module.action';
import ListFood from './ListFood';
import ListOrder from './ListOrder'
function ContentFood( ) {
    const arrCategory = ['Trending', 'Fast Food', 'Fruit'];
    console.log('content re-render');

    const renderItem = ({ item }) => {
        return (
            <ListFood
                category={item}
            />
        )
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
                <FlatList
                    data={arrCategory}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                     />
            </View>
            <ListOrder />
        </View>
    )
}

export default React.memo(ContentFood)