import React, {useState} from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Button, Card, Icon, Input } from 'react-native-elements'

function OrderFood() {
    const [value, setValue] = useState(1);
    const handleRemove = () =>{
        console.log('remove');
    }
    return (
        <Card containerStyle={{
            borderWidth: 0,
            shadowColor: 'white',
            width: Dimensions.get('window').width * 0.28,
            borderRadius: 10,
            height: 100,
            display: 'flex',
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
                    containerStyle={{ width: 55 }}
                    resizeMode='center' />
            </View>
            <View style={{ marginHorizontal: 40, }}>
                <Text>Hamburger 'Wanted'</Text>
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
                        }} />
                    <Text>{value}</Text>
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
                        }} />
                </View>
            </View>
            <Card.Title style={{top: 20, right: -5}} > <Text style={{color: '#FB9300', fontSize: 15 }}>$</Text> 33.9</Card.Title>
            <Icon name='close-outline'
                type='ionicon'
                size={20}
                containerStyle={{position: 'absolute', top: -15, right: 0}}
                onPress={handleRemove} />
        </Card>
    )
}

export default OrderFood