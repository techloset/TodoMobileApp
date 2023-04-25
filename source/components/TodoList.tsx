import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';

type ItemData = {
    id: string;
    title: string;
    name: string,
    time: string,

};

const DATA: ItemData[] = [
    {
        id: '1',
        title: 'Landing page design',
        name: '9 am - 12pm',
        time: '9 AM'
    },
    {
        id: '2',
        title: 'Landing page design',
        name: '12 pm - 3pm ',
        time: '12 PM'
    },
    {
        id: '3',
        title: 'Mobile App prototypying',
        name: '3 pm - 7pm ',
        time: '3 PM'
    },
    {
        id: '4',
        title: 'Night out with girlfriend',
        name: '8 pm - 10pm ',
        time: '8 PM'
    },
];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;

    textColor: string,
    selected: boolean;


};

const Item = ({ item, onPress, backgroundColor, textColor, selected }: ItemProps) => (
    <TouchableOpacity
        onPress={onPress}
        style={[
            styles.item,
            { backgroundColor },
            selected ? styles.itemSelected : null,
        ]}
    >
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>

        <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
    </TouchableOpacity>
);


const App = () => {
    const [selectedId, setSelectedId] = useState<string>();

    useEffect(() => {
        return setSelectedId('1')

    }, [])
    const renderItem = ({ item }: { item: ItemData }) => {
        let backgroundColor = 'white';
        let shadow = 'none';
        let color = '#6C6868';

        if (item.id === selectedId) {
            backgroundColor = '#01D0DE';
            color = 'white';
        }



        return (
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 25, borderBottomWidth: 1, borderColor: '#D7D7D74D' }}>

                <Text style={{
                    color: '#5D606580', fontSize: 13,
                    fontFamily: 'Montserrat-Regular',
                }}>{item.time}</Text>
                <View style={{ display: 'flex' }} >
                    <Item
                        item={item}
                        onPress={() => setSelectedId(item.id)}
                        backgroundColor={backgroundColor}
                        textColor={color}
                        selected={item.id === selectedId}
                    />
                </View>


            </View>

        );
    };

    return (
        <SafeAreaView style={styles.container}>



            <FlatList
                data={DATA}
                renderItem={renderItem}

                keyExtractor={item => item.id}
                extraData={selectedId}
            />


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        paddingLeft: 20,
        gap: 5,
        marginVertical: 8,
        width: 258,
        height: 58,
        borderRadius: 15,
    },
    itemSelected: {
        shadowColor: '#01D0DE',
        elevation: 50,

        shadowOffset: {
            width: 20,
            height: 40,
        },
        shadowOpacity: 1,
        shadowRadius: 30,

    },
    title: {
        fontSize: 13,
        fontFamily: 'Montserrat-Bold',
    },
    name: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
    },
});


export default App;