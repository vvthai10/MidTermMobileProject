/* eslint-disable no-shadow */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
const seatPrice = [45000, 60000, 100000];

const Seat = (props) => {
    const brdColor = props.brdColor;
    const bkgrColor = props.bkgrColor;
    const [isPicked, setPicked] = useState(0);
    const onPress = () => {
        setPicked(isPicked === 0 ? 1 : 0);
        if (!isPicked) {
            props._psh(seatPrice[props.isVip]);
            props._addSeat(0, props.name);
        } else {
            props._psh(-seatPrice[props.isVip]);
            props._addSeat(1, props.name);
        }
    };
    return (
        <View style={[styles.seat_container]}>
            <TouchableOpacity
                style={[styles.seat, { backgroundColor: isPicked ? '#e71a0f' : bkgrColor, borderColor: brdColor }]}
                onPress={onPress}
            >
                <Text style={styles.text}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
};
const SeatRow = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Seat
                name={props.char + 1}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 2}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 3}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 4}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 5}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 6}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 7}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 8}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 9}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 10}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
            <Seat
                name={props.char + 11}
                isVip={props.isVip}
                brdColor={props.brdColor}
                bkgrColor={props.bkgrColor}
                _psh={props.psh}
                _addSeat={props.addSeat}
            />
        </View>
    );
};
const Descrip = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#e71a0f', height: 20, width: 20, margin: 5 }} />
                    <Text> Checked </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'grey', height: 20, width: 20, margin: 5 }} />
                    <Text> Đã chọn </Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderColor: 'green', borderWidth: 1, height: 20, width: 20, margin: 5 }} />
                    <Text> Thường </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderColor: '#e71a0f', borderWidth: 1, height: 20, width: 20, margin: 5 }} />
                    <Text> Vip </Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'pink', borderWidth: 1, height: 20, width: 20, margin: 5 }} />
                    <Text> Sweetbox </Text>
                </View>
            </View>
        </View>
    );
};

const Footer = (props) => {
    const _ = () => {
        let l = '';
        for (const i in props._listSeat) {
            l += props._listSeat[i];
            if (i !== props._listSeat.length - 1) l += ', ';
        }
        return l;
    };
    const list = _();
    return (
        <View style={{ flexDirection: 'row', flex: 1 }}>

            <View style={{ flexDirection: 'column', flex: 0.6 }}>
                <View
                    style={
                        ([styles.footer_text_box], { flex: 0.7, marginTop: 20, marginLeft: 10, borderBottomWidth: 1 })
                    }
                >
                    <Text>Rạp: {props._prevProps[0]}</Text>
                    <Text>Phòng Chiếu: {props._prevProps[1]}</Text>
                    <Text>Xuất Chiếu: {props._prevProps[2]}</Text>
                    <Text>Ghế: {list} </Text>
                </View>

                <View style={([styles.footer_text_box], { flex: 0.3, margin: 10 })}>
                    <Text>Tổng: {props._total} </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.footer_click_btn} onPress={props.onNextPressed}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, }}>NEXT</Text>
            </TouchableOpacity>
        </View>
    );
};

const BookSeatScreen = () => {
    const route = useRoute();
    const props = route.params;
    console.log(`Seat  ${props}`);

    const navigation = useNavigation();

    const [total, pushTotal] = useState(0);
    const [selectedSeat, changeSelectedSeat] = useState([]);
    const handleChangeTotal = (n) => {
        pushTotal(total + n);
    };
    const handleAddSeat = (i, n) => {
        if (i === 0) changeSelectedSeat([...selectedSeat, n]);
        else {
            const list = selectedSeat.filter((i) => i !== n);
            changeSelectedSeat(list);
        }
    };
    const onNextPressed = () => {
        const detail = {
            id: props.idMovie,
            filmName: props.filmName,
            cinName: props.cinName,
            time: props.time,
            room: props.room,
            date: props.date,
            idChairs: props.idChairs,
            listSeat: selectedSeat,
            totalSeatPrice: total,
        };
        navigation.navigate('BookFood', detail);
    };
    const onPrevPressed = () => {
        navigation.navigate('ChooseCinema');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.screen}>SCREEN</Text>
            <ScrollView style={{ borderWidth: 1, flex: 1 }} horizontal={true}>
                <ScrollView>
                    <SeatRow char="A" isVip={0} brdColor="green" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="B" isVip={0} brdColor="green" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="C" isVip={0} brdColor="green" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="D" isVip={0} brdColor="green" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="E" isVip={1} brdColor="red" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="F" isVip={1} brdColor="red" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="G" isVip={1} brdColor="red" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="H" isVip={1} brdColor="red" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="J" isVip={1} brdColor="red" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="K" isVip={1} brdColor="red" psh={handleChangeTotal} addSeat={handleAddSeat} />
                    <SeatRow char="L" isVip={2} bkgrColor="pink" psh={handleChangeTotal} addSeat={handleAddSeat} />
                </ScrollView>
            </ScrollView>
            <View style={styles.description}>
                <Descrip />
            </View>
            <View style={styles.footer_container}>
                <Footer
                    _total={total}
                    _listSeat={selectedSeat}
                    _prevProps={[props.cinName, props.room, props.time]}
                    onNextPressed={onNextPressed}
                    onPrevPressed={onPrevPressed}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFCF0',
    },
    screen: {
        textAlign: 'center',
        margin: 20,
    },
    seat_container: {
        border: 2,
        height: 35,
        width: 35,
        margin: 2,
    },
    text: {
        textAlign: 'center',
    },
    seat: {
        borderWidth: 2,
        flex: 1,
    },
    description: {
        justifyContent: 'center',
        flex: 0.2,
        marginTop: 20,
        flexDirection: 'row',
    },
    footer_container: {
        borderWidth: 1,
        flex: 0.5,
    },
    footer_click_btn: {
        height: 50,
        width: 50,
        marginLeft: 70,
        marginRight: 2,
        marginVertical: 65,
        borderRadius: 20,
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: '#343433',
    },
    footer_text_box: {
        justifyContent: 'center',
        flex: 0.7,
    },
});

export default BookSeatScreen;
