/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import StarRating from '../../components/StarRating';

const DetailFilmScreen = () => {
    const route = useRoute();
    const infoMovie = route.params;

    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDetailFilm = async (infoMovie) => {
        try {
            const res = await fetch(`/api/movie?id=${infoMovie.idFilm}`);
            const data = await res.json();
            // //console.log(`Data is: ${data}`);
            setMovie(data || []);
            setIsLoading(false);
        } catch (error) {}
        //console.log('render');
    };

    useEffect(() => {
        fetchDetailFilm(infoMovie);
    }, []);

    // const [movies, fetchMovies] = useIDMovies();
    const navigation = useNavigation();

    const onBookTicketsPressed = () => {
        // //console.warn('Buy tickets');
        const params = { idFilm: infoMovie.idFilm, nameFilm: infoMovie.nameFilm };
        //console.warn(params);
        navigation.navigate('ChooseCinema', params);
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.containerHeading}>
                <View style={styles.cardImgWrapper}>
                    <Image source={{ uri: movie.image }} resizeMode="cover" style={styles.cardImg} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{movie.name}</Text>
                    <StarRating ratings={3} reviews={99} />
                    <View style={styles.containerText}>
                        <Text style={styles.titleHeading}>Doanh thu{`: `}</Text>
                        <Text style={styles.textHeading}>{`${movie.buyTickets} vé`}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.titleHeading}>Thể loại{`: `}</Text>
                        <Text style={styles.textHeading}>{movie.category}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.titleHeading}>Ngôn ngữ{`: `}</Text>
                        <Text style={styles.textHeading}>{movie.languages}</Text>
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.titleHeading}>Thời lượng{`: `}</Text>
                        <Text style={styles.textHeading}>{movie.time}</Text>
                    </View>

                    <View style={styles.containerText}>
                        <Text style={styles.titleHeading}>Khởi chiếu{`: `}</Text>
                        <Text style={styles.textHeading}>{movie.premiere}</Text>
                    </View>

                    <Pressable onPress={onBookTicketsPressed} style={styles.button}>
                        <Text style={styles.text}>Mua vé</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.heading}>Tóm tắt</Text>
                    <Text style={styles.overview}>{movie.trailer}</Text>
                </View>
                <View>
                    <Text style={styles.heading}>Đạo diễn</Text>
                    <Text style={styles.overview}>{movie.director}</Text>
                </View>
                <View>
                    <Text style={styles.heading}>Diễn viên</Text>
                    <Text style={styles.overview}>{movie.cast}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const Constants = {
    textColor: '#333',
    baseColor: '#151C26',
    fadedColor: '#969696',
    secondaryColor: '#F4C10F',
};

const styles = StyleSheet.create({
    containerHeading: {
        height: 210,
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 210,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    cardInfo: {
        flex: 2,
        padding: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    containerText: {
        paddingVertical: 5,
        flexDirection: 'row',
    },
    titleHeading: { fontWeight: 'bold', fontSize: 12, color: '#444' },
    textHeading: { fontSize: 12, color: '#444' },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: '   bold',
    },
    container: {
        paddingTop: 20,
        width: '100%',
        flexDirection: 'row-reverse',
    },
    title: {
        fontSize: 24,
        color: '#333',
        marginLeft: 8,
    },
    button: {
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#EE2E24',
    },
    imageBg: {},
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Constants.fadedColor,
        margin: 5,
    },
    overview: {
        color: Constants.textColor,
        textAlign: 'justify',
        fontSize: 16,
        paddingHorizontal: 8,
    },
    details: {
        color: Constants.secondaryColor,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
});

export default DetailFilmScreen;
