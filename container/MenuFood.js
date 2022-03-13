import React from 'react'
import { View } from 'react-native'
import BannerFood from '../components/BannerFood'
import SearchBars from '../components/SearchBars'
import ListCategory from './ListCategory'

function MenuFood() {
    return (
        <>
            <View>
                <SearchBars />
                <BannerFood />
            </View>
            <ListCategory />
        </>
    )
}

export default React.memo(MenuFood)