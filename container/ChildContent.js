import React from 'react'
import { ScrollView, View } from 'react-native';
import ListFood from './ListFood';
function ChildContent({navigation}) {
    const arrCategory = ['Popular', 'Fast Food', 'Fruit'];
    return (
        <ScrollView>
            {arrCategory.map((item, index) => (
                <ListFood category={item}
                    key={index}
                    handleNav={() => navigation.navigate(item, { name: item, check: true })}
                />
            ))}
        </ScrollView>
    )
}

export default ChildContent