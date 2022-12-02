/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
// import ListDetaiMovies from '../../../assets/data/listDetailMovies'
const ChooseCinemaScreen = () => {
    const navigation = useNavigation();

    const DateView = ({ date }) => {
        const params = date.split('/');
        return (
            <TouchableOpacity
                style={[styles.boxDate, dateChoose === date && styles.boxDateChoose]}
                onPress={() => {
                    onChooseDatePressed(date);
                }}
            >
                <View style={styles.containerMonth}>
                    <Text>{params[2]}</Text>
                    <Text>{params[0].slice(0, 3)}</Text>
                </View>
                <View style={styles.containerDay}>
                    <Text style={styles.textDay}>{params[1]}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const dates = [];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var current = new Date();
    for (var i = 0; i < 10; i++) {
        dates.push(
            `${weekdays[current.getDay()]}/${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`,
        );
        current.setDate(current.getDate() + 1);
    }

    const route = useRoute();
    console.warn(route.params);
    const idMovie = route.params.idFilm;
    const nameMovie = route.params.nameFilm;

    const [dateChoose, setDateChoose] = useState(dates[0]);
    const [infoMovieDate, setInfoMovieDate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const onChooseDatePressed = (date) => {
        setDateChoose(date);
        setIsLoading(true);
    };

    const fetchDetailFilm = async (idMovie, dateChoose) => {
        try {
            const res = await fetch(`/api/movie/time?id=${idMovie}&date=${dateChoose}`);
            const data = await res.json();
            // console.log(`Data is: ${data}`);
            setInfoMovieDate(data || []);
            setIsLoading(false);
        } catch (error) {}
        console.log('render');
    };

    const onChooseTimePressed = (nameCinema, date, time, room, idChairs) => {
        const detail = {
            id: idMovie,
            filmName: nameMovie,
            cinName: nameCinema,
            date: date,
            time: time,
            room: room,
            idChairs: idChairs,
            // Giờ, ngày, phòng
        };
        console.warn(detail);
        navigation.navigate('BookSeatScreen', detail);
    };

    useEffect(() => {
        console.log('re render effect');
        fetchDetailFilm(idMovie, dateChoose);
        console.log(`Length: ${infoMovieDate.length}`);
        console.log(`Length: ${infoMovieDate.detail_date}`);
        console.log(infoMovieDate);
    }, [dateChoose]);

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.containerChooseDate}>
                {dates.map((item, id) => (
                    <DateView key={id} date={item} />
                ))}
            </ScrollView>
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <ScrollView style={styles.containerChooseTime}>
                    {infoMovieDate.detail_date === undefined ? (
                        <Text>Không có lịch chiếu vào hôm nay</Text>
                    ) : (
                        <>
                            {infoMovieDate.detail_date.map((item, i) => {
                                return (
                                    <View key={i} style={styles.boxCinema}>
                                        <Text style={styles.nameCinema}>{item.address}</Text>
                                        <ScrollView horizontal style={styles.containerTime}>
                                            {item.showtime.map((value, index) => {
                                                return (
                                                    <TouchableOpacity
                                                        key={index}
                                                        style={styles.boxTime}
                                                        onPress={() => [
                                                            onChooseTimePressed(
                                                                item.address,
                                                                dateChoose,
                                                                value.hour,
                                                                value.room,
                                                                value.seats,
                                                            ),
                                                        ]}
                                                    >
                                                        <Text style={styles.textTime}>{value.hour}</Text>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </ScrollView>
                                    </View>
                                );
                            })}
                        </>
                    )}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerChooseDate: {
        borderBottomWidth: 2,
        maxHeight: 70,
    },
    containerChooseTime: {
        flex: 1,
        paddingTop: 10,
    },
    boxDate: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 10,
    },
    boxDateChoose: {
        backgroundColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    containerMonth: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    containerDay: {},
    textDay: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    nameCinema: {
        paddingLeft: 5,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    containerTime: {
        paddingBottom: 5,
    },
    boxTime: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#333',
    },
    textTime: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    boxCinema: {
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
});

export default ChooseCinemaScreen;
