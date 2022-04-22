import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CardFood from '../components/CardFood'
import { setFoodOrdered } from '../store/Module.action';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview'
import { arr } from '../utils';
import { numColumns } from '../components/config/card.config';
function ListFood_1() {
    const dispatch = useDispatch();
    const data = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(arr.slice(0,8));
    const width = numColumns(Dimensions.get('window').width);
    const layoutProvider = new LayoutProvider((i) => {
        return data.getDataForIndex(i).type;
    }, (type, dim) => {
        switch (type) {
            case 'NORMAL':
                dim.width = width+20;
                dim.height = width*1.5;
                break;
            default:
                dim.width = 0;
                dim.height = 0;
                break;
        }
    })
    console.log('re-render list food 1');
    const renderItems = (type, data) => {
        const { name, id } = data;
        const handleClick = () => {
            const newFood = { name: name, id: id, quanity: 1 }
            dispatch(setFoodOrdered(newFood));
        }
        return (
            <CardFood name={name} id={id} handleClick={handleClick} isAll={true} />
        );
    }

    return (
        <RecyclerListView
            dataProvider={data}
            layoutProvider={layoutProvider}
            rowRenderer={renderItems}
        />
    );
}

export default React.memo(ListFood_1);
