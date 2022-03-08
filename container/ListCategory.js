import React, { useState } from 'react'
import { Dimensions, FlatList,View } from 'react-native'
import CategoryFood from '../components/CategoryFood';
import NavFood from '../components/NavFood'
const category = [
    {
        id: 1,
        name: 'All',
        img: require('../assets/cooking.png')
    },
    {
        id: 2,
        name: 'Fr Food',
        img: require('../assets/pizza.png')
    },
    {
        id: 3,
        name: 'Ht Food',
        img: require('../assets/salad.png')
    },
    {
        id: 4,
        name: 'Drink',
        img: require('../assets/drink.png')
    },
    {
        id: 5,
        name: 'Hotpot',
        img: require('../assets/hot-pot.png')
    },
    {
        id: 6,
        name: 'Hotpot',
        img: require('../assets/hot-pot.png')
    }
];
function ListCategory() {
    const [selected, setSelected] = useState(1)
    const renderItems = ({ item }) => {
        const color1 = item.id == selected ? '#FB9300' : 'white';
        const color2 = item.id == selected ? 'white' : '#FB9300';
        return (
            <CategoryFood
                name={item.name}
                img={item.img}
                id={item.id}
                onPress={() => setSelected(item.id)}
                color1={color1}
                color2={color2} />)
    }

    return (
        <View style={{width: Dimensions.get('window').width * 0.65,}}>
            <NavFood category='Menu' />
            <FlatList
                data={category}
                renderItem={renderItems}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                style={{
                    backgroundColor: '#FAF9FB',
                    width: Dimensions.get('window').width * 0.65,
                    paddingLeft: 18,
                }}
            />
        </View>
    )
}

export default ListCategory