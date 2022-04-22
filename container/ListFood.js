import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import CardFood from '../components/CardFood'
import NavFood from '../components/NavFood';
import { setFoodOrdered } from '../store/Module.action';
import { arr } from '../utils';
import { NavContext } from './Home';
function ListFood(props) {
    const nav = useContext(NavContext);
    const { category } = props;
    const dispatch = useDispatch();
    const { route } = props;
    const ref = React.useRef(false);
    const {width, height} = Dimensions.get('window');
    console.log(height/width);
    const count = Dimensions.get('window').width * 0.65 / 190;
    useEffect(() => {
        ref.current = true;
        return () => {
            ref.current = false;
        }
    }, [])

    console.log('re-render list food');
    const renderItems = ({ item }) => {
        const handleClick = () => {
            const newFood = { name: item.name, id: item.id, quanity: 1 }
            dispatch(setFoodOrdered(newFood));
        }
        return (
            <CardFood name={item.name} id={item.id} handleClick={handleClick} isAll={!route ? false : true } />
        );
    }
    const Loading = () => {
        return (
            <>
                {ref.current == true ?
                    <View>
                    </View> :
                    <View style={{ width: '100%', height: 100, display: 'flex', alignItems: 'center' }}>
                        <Text>Loading.....</Text>
                    </View>}
            </>
        )
    }


    return (
        <>
            {route != undefined ?
                <View style={{
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    alignItems: 'center',
                    height: 1000
                }}>
                    {/* <BannerFood /> */}
                    <Image
                        style={{ width: '100%', height: 300, marginVertical: 50 }}
                        source={require('../assets/banner1.jpg')}
                        resizeMode={'cover'} />
                    <FlatList
                        data={arr}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        initialNumToRender={0}
                        numColumns={4}
                        style={{ backgroundColor: '#FAF9FB', }}
                        contentContainerStyle={{ minHeight: `100%`, paddingBottom: 300 }}
                        ListFooterComponent={Loading}
                    />
                </View> :
                <View style={{ width: Dimensions.get('window').width * 0.65 }}>
                    <NavFood category={category} handleNav={() => { nav.navigate(category) }} />
                    <FlatList
                        data={arr.slice(0, 4)}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        initialNumToRender={1}
                        numColumns={4}
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#FAF9FB', paddingBottom: 50 }}

                    />
                </View>}
        </>
    );
}

export default React.memo(ListFood);
