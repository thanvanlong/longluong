import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CardFood from '../components/CardFood'
import NavFood from '../components/NavFood';
import { setFoodOrdered } from '../store/Module.action';
import { arr } from '../utils';
function ListFood(props) {

    const arr2 = arr.slice(0, 4);
    const { category, handleNav } = props;
    const dispatch = useDispatch();
    const { route } = props;
    console.log('re-render list food');
    const renderItems = ({ item }) => {
        const handleClick = () => {
            const newFood = { name: item.name, id: item.id, quanity: 1 }
            dispatch(setFoodOrdered(newFood));
        }
        return (
            <CardFood name={item.name} id={item.id} handleClick={handleClick} />
        );
    }
    return (
        <>
            {route?.params?.check === true ?
                <View style={{
                    height: 1000,
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    alignItems: 'center'
                }}>
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
                </View> :
                <View style={{ height: 380, width: Dimensions.get('window').width * 0.65 }}>
                    <NavFood category={category} handleNav={handleNav} />
                    <FlatList
                        data={arr2}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal
                        initialNumToRender={4}
                        showsHorizontalScrollIndicator={false}
                        style={{ backgroundColor: '#FAF9FB' }}
                    />
                    {/* <Button title={'Click me'} onPress={props.onClick} /> */}
                </View>}

        </>
    );
}

export default React.memo(ListFood);
