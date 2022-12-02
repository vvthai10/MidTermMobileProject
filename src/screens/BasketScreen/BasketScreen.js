/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
const FoodTag = (props) => {
    return (
        <View style={styles.food_tag}>
            <Text style={styles.label_text}> {props.text}</Text>
            <Text style={{ marginLeft: 10, textAlignVertical: 'center' }}> {props.nums} </Text>
        </View>
    );
};

const Detail = (props) => {
    console.log(props);
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.img_container}>
                {/* <Image style={styles.img} source={require('./temp.jpg')} /> */}
            </View>
            <View style={{ margin: 5, flex: 0.7 }}>
                <Text style={{ fontWeight: 'bold' }}>{props.filmName}</Text>
                <Text>{props.time}</Text>
                <Text>{props.cinName}</Text>
                <Text>{'Cinema ' + props.room}</Text>
                <Text>{'Seats: ' + props.listSeat}</Text>
                <Text style={{ color: '#AD2B33', fontWeight: 'bold' }}>
                    {'Total Payment: ' + props.totalFoodPrice + props.totalSeatPrice}
                </Text>
            </View>
        </View>
    );
};

const BasketScreen = () => {
    const props = {
        filmName: 'ONE PIECE',
        cinName: 'CGV Hung Vuong',
        room: 'C12',
        slot: '12',
        time: '17:30 - 19:25',
        listSeat: ['A1', 'A2', 'A3'],
        totalSeatPrice: 300,
        listPickedFood: [{ text: 'Food1', price: 400, nums: 2 }],
        totalFoodPrice: 50000,
    };
    const navigation = useNavigation();
    const onNextPressed = () => {
        // navigation.navigate('Giỏ hàng');
    };
    const onPrevPressed = () => {
        navigation.navigate('BookSeatScreen');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.label_container} onPress={onPrevPressed}>
                <Text style={styles.back}>BACK</Text>
            </TouchableOpacity>

            <View style={styles.datail_container}>
                <Detail
                    filmName={props.filmName}
                    time={props.time}
                    cinName={props.cinName}
                    room={props.room}
                    slot={props.slot}
                    listSeat={props.listSeat}
                    totalSeatPrice={props.totalSeatPrice}
                    totalFoodPrice={props.totalFoodPrice}
                />
            </View>
            <View style={styles.label_container}>
                <Text style={styles.label_text}>TICKET INFORMATION</Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.label_text}> Quantity</Text>
                <Text style={{ marginLeft: 10, textAlignVertical: 'center' }}> {props.listSeat.length} </Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.label_text}> Sub Total</Text>
                <Text style={{ marginLeft: 10, textAlignVertical: 'center' }}> {props.totalSeatPrice} </Text>
            </View>
            <View style={styles.label_container}>
                <Text style={styles.label_text}>CONCESSION INFORMATION</Text>
            </View>
            <View style={{ flex: 0.4 }}>
                <ScrollView style={[styles.list_food]}>
                    {props.listPickedFood.map((item, index) => {
                        return <FoodTag text={item.text} nums={item.nums} />;
                    })}
                </ScrollView>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.label_text}> Sub Total</Text>
                <Text style={{ marginLeft: 10, textAlignVertical: 'center' }}> {props.totalFoodPrice} </Text>
            </View>
            <View style={{ flex: 0.2, borderTopWidth: 1.5 }}>
                <Text style={{ margin: 5 }}>
                    I agree to the Term of Use and am purchasing tickets for age appropriate audience.
                </Text>
                <TouchableOpacity style={styles.next_btn} onPress={onNextPressed}>
                    <Text style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white' }}>
                        I AGREE AND CONTINUE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFCF0',
    },
    datail_container: {
        flex: 0.3,
    },
    label_container: {
        flex: 0.1,
        backgroundColor: '#DAD6CC',
    },
    text_container: {
        flex: 0.08,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    list_food: {},

    ////////////////////////
    label_text: {
        marginLeft: 10,
        textAlignVertical: 'center',
        flex: 1,
    },
    food_tag: {
        height: 50,
        flexDirection: 'row',
    },
    next_btn: {
        margin: 15,
        flex: 1,
        width: 300,
        borderRadius: 20,
        backgroundColor: '#AD2B33',
        alignSelf: 'center',
    },
    img_container: {
        flex: 0.3,
        marginHorizontal: 5,
        marginVertical: 15,
    },
    back: {
        marginLeft: 10,
        textAlignVertical: 'center',
        flex: 1,
    },
});

export default BasketScreen;