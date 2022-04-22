import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import ListFood from './ListFood';
import ListOrder from './ListOrder'
import { category } from '../utils';
function ContentFood( ) {
    console.log('content re-render');

    const renderItem = ({ item }) => {
        return (
            <ListFood
                category={item.name}
            />
        )
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View>
                <FlatList
                    data={category}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                     />
            </View>
            <ListOrder />
        </View>
    )
}

export default React.memo(ContentFood)