import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
const ballon = (require('../asserts/Line.png'))
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Image,
    Text,
    StatusBar,
    Pressable,
    ImageBackground,
    TouchableOpacity,
    ScrollView,

} from 'react-native';




const DATA = [
    {
        id: '1',
        title: 'Mon',

    },
    {
        id: '2',
        title: 'Tue',
    },
    {
        id: '3',
        title: 'Wed',
    },
    {
        id: '4',
        title: 'Thu',
    },
    {
        id: '5',
        title: 'Fri',
    },
    {
        id: '6',
        title: 'Sat',
    },
    {
        id: '7',
        title: 'Sun',
    },
];



const Item = ({ item, handlePress, isPress }) => (
    <TouchableOpacity
        onPress={() => handlePress(item.id)}>


        <View style={[styles.item, { backgroundColor: isPress === item.id ? '#FF9D00' : 'white' }]}>

            <Text style={{ fontSize: 36, fontFamily: 'Montserrat-Bold', color: isPress === item.id ? 'white' : '#000000' }}>{item.id}</Text>

            <Text style={{ fontSize: 18, fontFamily: 'Montserrat-Bold', color: isPress === item.id ? 'white' : '#000000' }}>{item.title}</Text>


        </View>
    </TouchableOpacity>
);


const App = () => {

    const [isPress, setPress] = useState<string>()
    useEffect(() => {
        return setPress('3')

    }, [])
    const handlePress = (id) => {
        setPress(id)


    }
    return (
        <View style={{ display: 'flex' }}>
            <View style={styles.container}>
                <FlatList
                    data={DATA}

                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Item item={item} handlePress={handlePress} isPress={isPress} />}
                    keyExtractor={item => item.title}
                />


            </View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 18, marginBottom: 13 }}>
                <ImageBackground source={ballon} style={{ height: 4, width: 232 }}>

                    <Image source={require('../asserts/lineCircle.png')} style={{ height: 12, width: 12, marginTop: -5, marginLeft: -8 }} />


                </ImageBackground>
            </View>



        </View >
    );
};

const styles = StyleSheet.create({
    container: {

        marginTop: StatusBar.currentHeight || 0,
    },
    item: {

        width: 59,
        height: 96,
        borderRadius: 30,
        alignItems: 'center',
        gap: 5,
        marginHorizontal: 10,
    },

    scroll: {
    }
});

export default App;