import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Button, Card, Icon, Rating } from "react-native-elements";
import { numColumns } from "./config/card.config";
function CardFood(props) {
  const rate = props.isAll == true ? 1 : 0.65;
  const width = numColumns(Dimensions.get('window').width * rate);
  const { name, handleClick } = props;
  return (
    <Card containerStyle={{ ...style.container, width: width, height: width * 1.3 }}>
      <Card.Image
        source={require("../assets/hamberger.png")}
        style={style.image}
        resizeMode={'center'}
      />
      <Card.Title>{name}</Card.Title>
      <Rating imageSize={13} readonly startingValue={4} />
      <View style={style.sub}>
        <Card.Title style={style.title} > <Text style={{ color: '#FB9300', fontSize: 15 }}>$</Text> 33.9</Card.Title>
        <Button
          title={''}
          icon={
            <Icon
              name='add-circle'
              type='ionicon'
              size={50}
              color='#FB9300' />
          }
          buttonStyle={style.button}
          containerStyle={style.ctnButton}
          onPress={handleClick}
        />
      </View>
    </Card>

  );
}
const style = StyleSheet.create({
  container: {
    borderColor: '#f5f5f5',
    borderWidth: 0.5,
    borderRadius: 18,
    marginTop: 20,
    marginRight: 0,
    marginLeft: 10,
    elevation: 10,
    position: 'relative',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
  },
  image: {
   width: '90%'
  },
  ctnButton: {
    // position: 'absolute',
    // top: 160,
    // right: -15,
    zIndex: 2
  },
  button: {
    backgroundColor: 'transparent'
  },
  title: {
    // position: 'absolute'
  },
  sub: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
export default React.memo(CardFood);
