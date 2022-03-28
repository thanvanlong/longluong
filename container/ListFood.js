import React, { useContext, useEffect } from 'react';
import { Dimensions, FlatList, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import CardFood from '../components/CardFood'
import NavFood from '../components/NavFood';
import { setFoodOrdered } from '../store/Module.action';
import { arr } from '../utils';
import { NavContext } from './Home';
import AnimatedLottieView from 'lottie-react-native';
function ListFood(props) {
    const nav = useContext(NavContext);
    const { category } = props;
    const dispatch = useDispatch();
    const { route } = props;
    const ref = React.useRef(false);

    useEffect(() => {
        ref.current = true;
        return () => {
            ref.current = false;
        }
    }, [])

    console.log('re-render list food');
    const renderItems = ({ item }) => {
        const handleClick = () => {
            const newFood = { name: item.name, id: item.id, quanity: 1 }
            dispatch(setFoodOrdered(newFood));
        }
        return (
            <CardFood name={item.name} id={item.id} handleClick={handleClick} />
        );
    }
    const Loading = () => {
        return (
            <>
                {ref.current == true ?
                    <View>
                        {/* <Text>Loaded</Text> */}
                    </View> :
                    <View style={{width: '100%', height: 100, display: 'flex', alignItems: 'center'}}>
                        {/* <AnimatedLottieView
                            source={require('../assets/lottie/95171-colors.json')}
                            style={{ width: 80, height: 80 }}
                            autoPlay
                            loop
                        /> */}
                        <Text>Loading.....</Text>
                    </View>}
            </>
        )
    }

    return (
        <>
            {route != undefined ?
                <View style={{
                    width: Dimensions.get('window').width,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    {/* <BannerFood /> */}
                    <FlatList
                        data={arr.slice(0, 12)}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        initialNumToRender={1}
                        numColumns={5}
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#FAF9FB', marginVertical: 50 }}
                        ListFooterComponent={Loading}
                    />
                </View> :
                <View style={{ width: Dimensions.get('window').width * 0.65 }}>
                    <NavFood category={category} handleNav={() => nav.navigate(category)} />
                    <FlatList
                        data={arr.slice(0, 4)}
                        renderItem={renderItems}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        initialNumToRender={1}
                        numColumns={4}
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#FAF9FB', paddingBottom: 50 }}

                    />
                    {/* <Button title={'Click me'} onPress={props.onClick} /> */}
                </View>}

        </>
    );
}

export default React.memo(ListFood);
