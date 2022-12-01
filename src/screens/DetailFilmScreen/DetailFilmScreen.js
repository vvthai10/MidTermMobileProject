import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useRoute, useEffect } from '@react-navigation/native';
import { useIDMovies } from '../../hooks/useMovies';

const DetailFilmScreen = () => {
    const route = useRoute();
    const film = route.params;

    const [movies, fetchMovies] = useIDMovies();

    useEffect(() => {
        fetchMovies(film.idFilm);
    }, [film.idFilm, fetchMovies]);

    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>{movies.title}</Text>
                <View>
                    <Image
                        source={{ uri: movies.image }}
                        style={styles.imageBg}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.heading}>Tóm tắt</Text>
                <Text style={styles.overview}>{movies.trailer}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.heading}>Thời lượng</Text>
                    <Text style={styles.details}>{movies.time} min.</Text>
                </View>

                <View>
                    <Text style={styles.heading}>Khởi chiếu</Text>
                    <Text style={styles.details}>{movies.premiere}</Text>
                </View>
            </View>
            <Button title="Mua vé" onPress={() =>
                navigation.navigate('PickDate', { name: 'Name of Movie' })
                // navigation.goBack()
            } />
            <View>
                <Text style={styles.heading}>Đánh giá</Text>
                <Text style={styles.overview}>{movies.category}</Text>
            </View>
            <View>
                <Text style={styles.heading}>Thể loại</Text>
                <Text style={styles.overview}>{movies.category}</Text>
            </View>
            <View>
                <Text style={styles.heading}>Đạo diễn</Text>
                <Text style={styles.overview}>{movies.director}</Text>
            </View>
            <View>
                <Text style={styles.heading}>Diễn viên</Text>
                <Text style={styles.overview}>{movies.cast}</Text>
            </View>


            <View>
                <Text style={styles.heading}>Ngôn ngữ</Text>
                <Text style={styles.overview}>{movies.languages}</Text>
            </View>

        </ScrollView>

    );
};

const Constants = {
    textColor: '#fff',
    baseColor: '#151C26',
    fadedColor: '#969696',
    secondaryColor: '#F4C10F'
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        width: '100%',
        flexDirection: 'row-reverse',
    },
    title: {
        fontSize: 24,
        color: '#A1A1A1',
        marginLeft: 8,
    },
    imageBg: {
        height: 250,
    },
    heading: {
        fontSize: 19,
        color: Constants.fadedColor,
        margin: 10,
    },
    overview: {
        color: Constants.textColor,
        marginHorizontal: 10,
        textAlign: 'justify',
        fontSize: 16,
    },
    details: {
        color: Constants.secondaryColor,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
});

export default DetailFilmScreen;
