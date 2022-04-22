import React, { useContext, useState } from 'react'
import { Dimensions, FlatList,View } from 'react-native'
import CategoryFood from '../components/CategoryFood';
import NavFood from '../components/NavFood';
import { category } from '../utils';
import { NavContext } from './Home';

function ListCategory() {
    const nav = useContext(NavContext);
    const [selected, setSelected] = useState(1);
    const count = Dimensions.get('window').width/125;
    const renderItems = ({ item }) => {
        const color1 = item.id == selected ? '#FB9300' : 'white';
        const color2 = item.id == selected ? 'white' : '#FB9300';
        const handleNav = () =>{
            nav.navigate(item.name);
        }
        return (
            <CategoryFood
                name={item.name}
                img={item.img}
                id={item.id}
                onPress={handleNav}
                color1={color1}
                color2={color2} />)
    }

    return (
        <View style={{width: Dimensions.get('window').width ,}}>
            <NavFood category='Menu' />
            <FlatList
                data={category}
                renderItem={renderItems}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                style={{
                    backgroundColor: '#FAF9FB',
                    width: Dimensions.get('window').width ,
                    paddingLeft: 18,
                }}
            />
        </View>
    )
}

export default ListCategory