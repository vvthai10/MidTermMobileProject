import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useMovies } from '../../hooks/useMovies';
import ListCardFilm from '../../components/ListCardFilm';
const MoviesLibraryScreen = () => {
    const [type, setType] = useState(1);

    const route = useRoute();
    const category = route.params.type;

    const [movies, isLoading, fetchMovies] = useMovies();

    useEffect(() => {
        fetchMovies(type, category);
    }, [type, category, fetchMovies]);

    //console.log(movies.length);

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
                <TouchableOpacity
                    style={[styles.item, type === 1 && { backgroundColor: '#16C07B' }]}
                    onPress={() => {
                        setType(1);
                    }}
                >
                    {/* <Image source={category.image} /> */}
                    <Text style={[styles.name, type === 1 && { color: '#FFFFFF' }]}>Phim đang chiếu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, type === 2 && { backgroundColor: '#16C07B' }]}
                    onPress={() => {
                        setType(2);
                    }}
                >
                    {/* <Image source={category.image} /> */}
                    <Text style={[styles.name, type === 2 && { color: '#FFFFFF' }]}>Phim sắp chiếu</Text>
                </TouchableOpacity>
            </ScrollView>
            {isLoading ? (
                <View>
                    <Text>Đang tải</Text>
                </View>
            ) : (
                <ScrollView>
                    <ListCardFilm movies={movies} />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        width: '100%',
        flexDirection: 'row-reverse',
    },
    name: {
        fontSize: 12,
        color: '#A1A1A1',
        marginLeft: 8,
    },
    item: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 36,
        marginRight: 14,
    },
});

export default MoviesLibraryScreen;
