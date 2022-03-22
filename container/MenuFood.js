import React from 'react'
import { View } from 'react-native'
import BannerFood from '../components/BannerFood'
import SearchBars from '../components/SearchBars'
import ListCategory from './ListCategory'

function MenuFood({navigation}) {
    return (
        <>
            <View>
                <SearchBars />
                <BannerFood />
            </View>
            <ListCategory navigation={navigation} />
        </>
    )
}

export default React.memo(MenuFood)