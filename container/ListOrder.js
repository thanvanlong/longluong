import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, View, Text } from 'react-native';
import NavFood from '../components/NavFood';
import OrderFood from '../components/OrderFood';
import { useSelector } from 'react-redux'
function ListOrder() {
    const arr = [1, 2, 3, 4, 5, 6];
    const [arrX, setArrX] = useState([])
    useSelector((state) => useEffect(() => {
        setArrX(state?.listFood.slice(0,4))
    }, [state])
    );
    return (
        <View style={{ width: Dimensions.get('window').width * 0.3, marginHorizontal: 15, position: 'relative' }}>
            <NavFood category='Order Menu' />
           {arrX.length > 0 ?  <ScrollView horizontal={false} >
                {arrX.map((item, index) => (
                    <OrderFood key={index}  />
                ))
                }
            </ScrollView> : <Text style={{fontSize: 30, top: 250, left: 50}}>Nothing in Order Menu</Text>}
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

export default ListOrder