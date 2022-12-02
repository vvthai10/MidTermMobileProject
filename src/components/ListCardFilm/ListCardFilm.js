import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StarRating from '../StarRating';

const ListCardFilm = ({ movies = [] }) => {
    //console.warn(movies);
    const navigation = useNavigation();

    const onDetailFilm = (item) => {
        navigation.navigate('DetailFilm', { nameFilm: item.name, idFilm: item.id });
    };

    const CardFilm = ({ item }) => {
        return (
            <Pressable
                onPress={() => {
                    onDetailFilm(item);
                }}
                style={styles.card}
            >
                <View style={styles.cardImgWrapper}>
                    <Image source={{ uri: item.image }} resizeMode="cover" style={styles.cardImg} />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <StarRating ratings={item.ratings} reviews={item.reviews} />
                    <Text style={styles.cardDetails}>{`Ngày khởi chiếu: ${item.premiere}`}</Text>
                </View>
            </Pressable>
        );
    };
    return (
        <View style={styles.cardsWrapper}>
            {movies.map((movie, index) => {
                return <CardFilm key={index} item={movie} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 200,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});

export default ListCardFilm;
