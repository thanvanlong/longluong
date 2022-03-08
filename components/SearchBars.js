import React from 'react'
import { SearchBar } from 'react-native-elements'
import { View, StyleSheet, Dimensions } from 'react-native'
function SearchBars() {
    const w = Dimensions.get('window').width - 40;
    return (
        <View style={styles.container}>
            <SearchBar
                platform='android'
                placeholder='Search your food'
                containerStyle={{
                    top: 50,
                    marginLeft: 15,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#e0e0e0',
                    width: w,
                    height: 50
                }}
                inputContainerStyle={{ left: 5, top: -7 }}
                inputStyle={{ color: '#a3a3a3' }}
                onBlur={() => console.log('blur')}
                blurOnSubmit={true}
                searchIcon={false}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        top: -30, 
    }
})

export default SearchBars