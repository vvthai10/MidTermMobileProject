/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ShoppingCartScreen = () => {
    // user: token,
    //         filmName: props.filmName,
    //         cinName: props.cinName,
    //         time: props.time,
    //         room: props.room,
    //         idChairs: props.idChairs,
    //         listSeat: props.listSeat,
    //         totalPrice: _total,
    //         date: props.date,
    //         listPickedFood: props.listPickedFood,
    var RNFS = require('react-native-fs');
    var path = RNFS.DownloadDirectoryPath + '/listTicket.json';
    const [listTicket, addListTicket] = useState({});

    const ReadFile = async () => {
        try {
            console.warn('start');
            const userToken = await AsyncStorage.getItem('userToken');
            const res = await RNFS.readFile(path, 'utf8');

            // console.log('next');
            // console.log(JSON.parse(res));
            // let data = JSON.parse(res);
            // console.log(res.find(({ user }) => user === userToken));
            let data = res.replace('][', ',');
            data = JSON.parse(data);
            // data = data.find(({ user }) => user === userToken);
            // console.log('finish');
            addListTicket(data);
        } catch (error) {}
    };

    useEffect(() => {
        ReadFile();
    }, []);
    console.log(listTicket);

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.logo,
                    { maxHeight: 60, borderBottomWidth: 1 },
                    { alignItems: 'center', justifyContent: 'center', padding: 20 },
                ]}
            >
                <Image
                    style={[styles.logo, { height: 30 }, { alignItems: 'center', justifyContent: 'center' }]}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text>Kênh đặt vé lớn nhất Việt Nam</Text>
            </View>
            <Text style={styles.title}>Danh sách phim đã đặt</Text>
            <ScrollView style={styles.containerCity}>
                {listTicket.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.textCity}>{}</Text>
                            <View style={styles.containercinema}>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Rạp phim{': '}</Text>
                                    <Text style={styles.textHeading}>{item.cinName}</Text>
                                </View>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Ngày chiếu{': '}</Text>
                                    <Text style={styles.textHeading}>{item.date}</Text>
                                </View>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Suất chiếu{': '}</Text>
                                    <Text style={styles.textHeading}>{item.time}</Text>
                                </View>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Phòng{': '}</Text>
                                    {/* <Text style={styles.textHeading}>{item.room}</Text> */}
                                </View>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Vị trí ghế{': '}</Text>
                                    <View style={styles.detailInfoSeats}>
                                        {item.listSeat.map((chair, indexChair) => {
                                            return (
                                                <Text key={indexChair} style={[styles.textHeading, { paddingLeft: 5 }]}>
                                                    {chair}
                                                </Text>
                                            );
                                        })}
                                    </View>
                                </View>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Đồ ăn đặt kèm{': '}</Text>
                                    <View style={styles.detailInfoFoods}>
                                        {item.listPickedFood.map((food, indexFood) => {
                                            return (
                                                <Text key={indexFood} style={styles.textHeading}>
                                                    {`${food.text} (Số lượng: ${food.nums})`}
                                                </Text>
                                            );
                                        })}
                                    </View>
                                </View>
                                <View style={styles.containerText}>
                                    <Text style={styles.titleHeading}>Tổng tiền{': '}</Text>
                                    <Text
                                        style={[styles.textHeading, { color: 'red' }]}
                                    >{`${item.totalPrice} đồng`}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: '#e71a0f',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    containerCity: {
        paddingLeft: 10,
        borderTopWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        paddingVertical: 10,
    },
    textCity: {
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    containercinema: {
        borderLeftWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginBottom: 15,
        marginHorizontal: 5,
    },
    namecinema: {
        color: '#e71a0f',
        fontWeight: 'bold',
    },
    addresscinema: {
        color: 'rgb(110,100,255)',
    },
    containerText: {
        paddingVertical: 5,
        flexDirection: 'row',
    },
    titleHeading: { fontWeight: 'bold', fontSize: 12, color: '#444' },
    textHeading: { fontSize: 12, color: '#444' },
    detailInfoSeats: {
        flexDirection: 'row',
    },
});

export default ShoppingCartScreen;
