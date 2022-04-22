import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
function CategoryFood(props) {
    const { name, img, id, onPress, color1, color2 } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={{
                width: 112,
                height: 140,
                shadowColor: 'white',
                borderWidth: 0,
                borderRadius: 10,
                backgroundColor: color1,
                marginHorizontal: 10    
                
            }} >
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    marginHorizontal: 15
                }}>
                </View>
                <Card.Image
                    source={img}
                    resizeMode='center'
                    containerStyle={{ width: 25, top: -100, left: 28, }}
                />
                <Card.Title style={{ top: -145, fontWeight: '700', fontSize: 13, color: color2, letterSpacing: 1.05 }}>{name}</Card.Title>
                <Button title=''
                    icon={
                        <Icon name='chevron-forward-outline' type='ionicon' color={color1} size={10} />}
                    buttonStyle={{
                        backgroundColor: color2,
                        width: 25,
                        height: 25,
                        borderRadius: 50,
                    }}
                    containerStyle={{ top: -150, left: 28 }}
                    onPress={onPress} />
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryFood