import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Card, CheckBox, Icon, Rating } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useDispatch } from 'react-redux'
import { setFoodOrdered } from "../store/Module.action";
function CardFood(props) {
  const { name, id } = props;
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleCheck = () => {
    if (!check) {
      dispatch(setFoodOrdered({ name: name, id: id, quanity: 1 }))
    }else{}
    setCheck(!check)
  }
  return (
    <Card containerStyle={{
      borderColor: '#f5f5f5',
      width: 175,
      height: 240,
      borderWidth: 0.5,
      borderRadius: 18,
      marginTop: 20,
      elevation: 10,
    }}>
      <Image
        source={require("../assets/hamberger.png")}
        style={{
          width: 150,
          maxHeight: 150,
          top: -25,
          alignSelf: 'center',
        }}
        resizeMode="center"
      />
      <Card.Title style={{ top: -25, left: 0 }}>{name}</Card.Title>
      <Rating imageSize={14} readonly startingValue={4} style={{ top: -35, left: -30 }} />
      <Card.Title style={{ top: -20, left: -42 }} > <Text style={{ color: '#FB9300', fontSize: 15 }}>$</Text> 33.9</Card.Title>
      <CheckBox
        center
        uncheckedIcon={
          <Icon
            name='add-circle'
            type='ionicon'
            size={50}
            color='#FB9300' />
        }
        checkedIcon={<Icon
          name='checkmark-circle-outline'
          type='ionicon'
          size={50}
          color='#FB9300' />
        }
        checked={check}
        onPress={handleCheck}
        containerStyle={{ top: -90, right: -50 }}
      />
    </Card>

  );
}

export default CardFood;
