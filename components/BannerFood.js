import React from 'react'
import { ScrollView, Image, Dimensions } from 'react-native'
function BannerFood() {
  const img = [
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood1.jpg',
    '../assets/bannerfood2.png'
  ]
  const w = Dimensions.get('window').width;
  const h = w * 0.2;
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled
      style={{
        width:  w - 20,
        height: w * 0.2,
        backgroundColor: '#FAF9FB',
        paddingRight: 20,
        zIndex:10,
        marginLeft: 10,
        overflow:'hidden'
      }}
      showsHorizontalScrollIndicator={false}>
      {
        img.map((item, index) => (
          <Image
            source={require('../assets/banner1.jpg')}
            key={index}
            style={{ width: w-20, height: h, borderWidth: 2,  borderColor: '#e0e0e0', }}
            resizeMode='cover'
          />
        ))
      }
    </ScrollView>
  )
}

export default BannerFood