import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
const DetailFilmScreen = () => {
    const route = useRoute();
    const film = route.params;
    return (
        <View>
            <Text>Hello, DetailFilmScreen</Text>
            <Text>{`ID film: ${film.idFilm}`}</Text>
            <Text>{`Name film: ${film.nameFilm}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default DetailFilmScreen;
