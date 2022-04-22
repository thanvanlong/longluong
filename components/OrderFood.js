import React, { useState, useEffect } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Button, Card, Icon, Input } from 'react-native-elements'
import { useDispatch } from 'react-redux';
import { setFoodOrdered } from '../store/Module.action';

function OrderFood(props) {
    const { item, listFood } = props;
    const [display, setDisplay] = useState('flex');
    const [data, setData] = useState()
    //console.log(item.quanity);
    const [value, setValue] = useState(item.quanity);
    const [price, setPrice] = useState(33.9 * item.quanity);
    const dispatch = useDispatch();
    const handleRemove = () => {
        setDisplay('none');
        dispatch(setFoodOrdered(listFood.filter(e => e.id != item.id)))
    }

    const handleAdd = () => {
        const temp = { name: item.name, id: item.id, quanity: item.quanity + 1 };
        console.log([...listFood.filter(e => e.id != item.id), temp]);
        dispatch(setFoodOrdered([...listFood.filter(e => e.id != item.id), temp]));
    }
    const handleSub = () => {
        if (item.quanity > 1) {
            const temp = { name: item.name, id: item.id, quanity: item.quanity - 1 };
        dispatch(setFoodOrdered([...listFood.filter(e => e.id != item.id), temp]));
        }
    }
    useEffect(() => {
        if (display == 'none') {
            const newData = listFood.filter(x => x.id != item.id);
            dispatch(setFoodOrdered(newData))
        }
    }, [display])

    return (
        <Card containerStyle={{
            borderWidth: 0,
            shadowColor: 'white',
            width: Dimensions.get('window').width * 0.28,
            borderRadius: 10,
            height: 100,
            display: display,
            justifyContent: 'center',
            position: 'relative'
        }} wrapperStyle={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 10,
                backgroundColor: '#ffc573',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card.Image source={require("../assets/hamberger.png")}
                    containerStyle={{ width: "50%" }}
                    resizeMode='center' />
            </View>
            <View style={{ marginHorizontal: 40, }}>
                <Text>{item.name}</Text>
                <View style={{ display: 'flex', width: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 5 }}>
                    <Button title={''}
                        icon={
                            <Icon
                                name='add-outline'
                                type='ionicon'
                                size={15}
                                color={'#333'} />
                        }
                        buttonStyle={{
                            backgroundColor: 'white',
                            width: 25,
                            height: 25,
                            borderColor: '#d9d9d9',
                            borderWidth: 1,
                            padding: 0
                        }}
                        onPress={handleAdd} />
                    <Text>{item.quanity}</Text>
                    <Button title={''}
                        icon={
                            <Icon
                                name='remove-outline'
                                type='ionicon'
                                size={15}
                                color={'#333'} />
                        }
                        buttonStyle={{
                            backgroundColor: 'white',
                            width: 25,
                            height: 25,
                            borderColor: '#d9d9d9',
                            borderWidth: 1,
                            padding: 0
                        }}
                        onPress={handleSub} />
                </View>
            </View>
            <Card.Title style={{ top: 20, right: -5 }} >
                <Text style={{ color: '#FB9300', fontSize: 15 }}>$</Text> {price} </Card.Title>
            <Button title={''}
                icon={
                    <Icon name='close-outline'
                        type='ionicon'
                        size={20}
                    // containerStyle={{ position: 'absolute', top: -15, right: 0 }}
                    />
                }
                containerStyle={{ position: 'absolute', top: -10, right: -8 }}
                buttonStyle={{ backgroundColor: 'white' }}
                onPress={handleRemove}
            />
        </Card>
    )
}

export default React.memo(OrderFood)