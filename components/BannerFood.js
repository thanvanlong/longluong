import React, { memo } from 'react'
import { ScrollView, Image, Dimensions, FlatList } from 'react-native'
function BannerFood(props) {
  const img = [
    {
      id: 1,
      img: require('../assets/bannerfood1.jpg')
    },
    {
      id: 2,
      img: require('../assets/bannerfood1.jpg')
    },
    {
      id: 3,
      img: require('../assets/bannerfood1.jpg')
    },
    {
      id: 4,
      img: require('../assets/bannerfood1.jpg')
    },
    {
      id: 5,
      img: require('../assets/bannerfood1.jpg')
    },
    {
      id: 6,
      img: require('../assets/bannerfood1.jpg')
    },
    {
      id: 7,
      img: require('../assets/bannerfood1.jpg')
    },
  ];
  const w = Dimensions.get('window').width;
  const h = w * 0.2;
  const renderItem = ({ item }) => {
    return (
      <Image
        source={item.img}
        style={{ width: w, height: h, borderWidth: 2, borderColor: '#e0e0e0', }}
        resizeMode='cover'
      />
    )
  }
  return (
    <FlatList 
      data={img}
      renderItem={renderItem}
      horizontal={true}
      pagingEnabled
      keyExtractor={item => item.id}
      style={{width: w}}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default memo(BannerFood)