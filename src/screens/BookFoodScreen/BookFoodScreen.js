/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
//GLOBAL VARIABLES

const listFoodName = [
    'SINGLE BT21 COMBO',
    'SNOOPY SINGLE COMBO',
    'SNOOPY DOUBLE COMBO',
    'SNOOPY TRIPLE COMBO',
    'MY COMBO',
    'CGV COMBPO',
];
const listFoodPrice = [309000, 239000, 409000, 599000, 83000, 102000];
const listFoodImg = [
    require('../../../assets/food/1.jpg'),
    require('../../../assets/food/2.jpg'),
    require('../../../assets/food/3.jpg'),
    require('../../../assets/food/4.jpg'),
    require('../../../assets/food/5.jpg'),
    require('../../../assets/food/6.jpg'),
];
const listFoodDescript = [
    '1 ly BT21 Back To School 32Oz + 1 nước siêu lớn + 1 bắp 44Oz (tùy chọn vị)',
    '1 ly Snoopy 32Oz (Kèm nước) + 1 bắp ngọt lớn (tùy chọn vị)',
    '2 ly Snoopy 32Oz (Kèm nước) + 1 bắp ngọt lớn (tùy chọn vị)',
    '3 ly Snoopy 32Oz (Kèm nước) + 1 bắp ngọt lớn (tùy chọn vị)',
    '1 bắp lớn + 1 nước siêu lớn. Nhận trong ngày xem phim',
    '2 bắp lớn + 1 nước siêu lớn. Nhận trong ngày xem phim',
];
const listPickedFunc = (list, list1) => {
    const res = [];
    for (const i in list) {
        res.push({ text: list[i], nums: 0, price: list1[i] });
    }
    return res;
};
const listPicked = listPickedFunc(listFoodName, listFoodPrice);
//DEFINE FUNC
const Food = (props) => {
    const id = props.id;
    const [num, increaseNum] = useState(0);
    const handleIncreaseNum = (n) => {
        if (!(n == -1 && num == 0)) {
            props.addFood(listFoodName[id], num + n, listFoodPrice[id]);
            increaseNum(num + n);
        }
    };
    const Incs = () => {
        handleIncreaseNum(1);
    };
    const Decs = () => {
        handleIncreaseNum(-1);
    };

    return (
        <View style={styles.food_container}>
            <View style={styles.food_img_container}>
                <Image style={styles.food_img} source={listFoodImg[id]} />
            </View>
            <View style={styles.food_textbox}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.food_textbox_header}>
                        {listFoodName[id] + ' - ' + listFoodPrice[id] + '.VND'}
                    </Text>
                    <Text style={styles.food_textbox_body}>{listFoodDescript[id]}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.click_box} onPress={Decs}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>-</Text>
                    </TouchableOpacity>
                    <View style={styles.click_box}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>{num}</Text>
                    </View>
                    <TouchableOpacity style={styles.click_box} onPress={Incs}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const FoodText = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text> {props.text + ':'} </Text>
            <Text> {'x' + props.num}</Text>
        </View>
    );
};
const Footer = (props) => {
    let list = props.list;
    const countTotal = (list) => {
        let res = 0;
        list.forEach((element) => {
            if (element.nums != 0) {
                res = res + element.nums * element.price;
            }
        });
        return res;
    };
    return (
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <TouchableOpacity style={styles.footer_click_btn} onPress={props.onPrevPressed}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>PREV</Text>
            </TouchableOpacity>

            <View style={{ flex: 0.6, margin: 10 }}>
                <ScrollView style={styles.footer_text_box}>
                    {list.map((item, index) => {
                        if (item.nums != 0) {
                            return <FoodText text={item.text} num={item.nums} />;
                        }
                    })}
                </ScrollView>
                <View style={{ flex: 0.2, margin: 5 }}>
                    <Text>Tổng: {countTotal(list)}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.footer_click_btn} onPress={props.onNextPressed}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15 }}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
};

const BookFoodScreen = () => {
    const navigation = useNavigation();
    const onNextPressed = () => {
        console.log('Basket');
        navigation.navigate('Basket');
    };
    const onPrevPressed = () => {
        navigation.navigate('BookSeatScreen');
    };

    const [listPick, addListPick] = useState(listPicked);
    // console.log(listPick);
    const handleAddFoodDetail = (name, num, price) => {
        const l = listPick.filter((element) => element.text != name);
        console.log(l);
        addListPick([...l, { text: name, nums: num, price: price }]);
    };
    return (
        <View style={styles.container}>
            <ScrollView style={styles.list_food}>
                {listPicked.map((item, index) => {
                    return <Food id={index} addFood={handleAddFoodDetail} />;
                })}
            </ScrollView>
            <View style={styles.footer}>
                <Footer list={listPick} onNextPressed={onNextPressed} onPrevPressed={onPrevPressed} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFCF0',
    },

    list_food: {
        flex: 0.7,
        backgroundColor: '#FDFCF0',
        borderBottomWidth: 2,
        borderColor: 'black',
    },
    footer: {
        flex: 0.3,
    },

    //////////////////////////////////
    food_container: {
        backgroundColor: '#222222',
        flexDirection: 'row',
        height: 120,
        borderColor: 'white',
        borderWidth: 1,
        flex: 1,
    },
    food_img_container: {
        width: 80,
        margin: 10,
    },
    food_img: {
        height: 80,
    },
    food_textbox: {
        flexDirection: 'column',
        margin: 10,
        //backgroundColor:'blue',
        flex: 1,
    },
    food_textbox_header: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14,
    },
    food_textbox_body: {
        marginTop: 10,
        color: 'white',
        fontSize: 10,
    },
    click_box: {
        height: 20,
        width: 40,
        backgroundColor: 'white',
        marginLeft: 1,
        borderRadius: 10,
    },
    ////////////////////////////////
    footer_text_box: {
        marginLeft: 5,
        flex: 0.8,
        borderBottomWidth: 1,
        //justifyContent: 'center',
    },
    footer_click_btn: {
        marginLeft: 2,
        marginRight: 2,
        marginVertical: 65,
        borderRadius: 20,
        flex: 0.2,
        justifyContent: 'center',
        backgroundColor: '#343433',
    },
});

export default BookFoodScreen;
