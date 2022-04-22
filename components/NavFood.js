import React from 'react';
import { View } from 'react-native';
import { Button, Header, Icon, Text } from 'react-native-elements';
function NavFood(props) {
    const { category, handleNav } = props;
    return (
        <Header leftComponent={
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text h4 h4Style={{ fontSize: 15 }}>{category}</Text>
                <Icon
                    name='filter-outline'
                    type='ionicon'
                    iconStyle={{
                        marginLeft: 20,
                        marginTop: 5
                    }}
                />
            </View>
        }
            rightComponent={
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text h5 style={{ top: 5, right: 15 }}>View all</Text>
                    <Button title=''
                        titleStyle={{ color: 'white' }}
                        icon={
                            <Icon
                                name='chevron-forward-outline'
                                type='ionicon'
                                color={'white'}
                                size={10} />}
                        buttonStyle={{
                            backgroundColor: '#FB9300',
                            width: 30, height: 30,
                            borderRadius: 5
                        }}
                        onPress={handleNav} />
                </View>
            }
            backgroundColor='#FAF9FB' />
    );
}

export default NavFood;
