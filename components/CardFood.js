import React from "react";
import { View, Image, Text } from "react-native";
import { Button, Card, CheckBox, Icon, Rating } from "react-native-elements";
function CardFood(props) {
  const { name, id, handleClick } = props;
  console.log('card food re-render' );
  return (
    <Card containerStyle={{
      borderColor: '#f5f5f5',
      width: 175,
      height: 240,
      borderWidth: 0.5,
      borderRadius: 18,
      marginTop: 20,
      elevation: 10,
      position: 'relative',
    }}>
      <Image
        source={require("../assets/hamberger.png")}
        style={{
          width: '90%',
          maxHeight: 150,
          top: -25,
          alignSelf: 'center',
        }}
        resizeMode="center"
      />
      <Card.Title style={{ top: -30, left: 0 }}>{name}</Card.Title>
      <Rating imageSize={14} readonly startingValue={4} style={{ top: -35, left: -30 }} />
      <Card.Title style={{ top: -20, left: -42 }} > <Text style={{ color: '#FB9300', fontSize: 15 }}>$</Text> 33.9</Card.Title>
      <Button 
        title={''}
        icon={
          <Icon
            name='add-circle'
            type='ionicon'
            size={50}
            color='#FB9300' />
        }
        buttonStyle={{backgroundColor: 'transparent'}}
        containerStyle={{position: 'absolute', top: 160, right: -15}}
        onPress={handleClick}
         />
    </Card>

  );
}

export default React.memo(CardFood);
