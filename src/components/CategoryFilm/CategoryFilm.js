import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryFilm = ({ item }) => {
    const Icon = item.icon;
    const navigation = useNavigation();

    const onCategoryFilmPressed = () => {
        navigation.navigate('MoviesLibrary', { type: item.name });
    };

    return (
        <TouchableOpacity style={styles.categoryBtn} onPress={onCategoryFilmPressed}>
            <View style={styles.categoryIcon}>
                <Icon name={item.iconName} size={25} color="#900" />
            </View>
            <Text style={styles.categoryBtnTxt}>{item.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryBtn: {
        flex: 1,
        width: '25%',
        marginHorizontal: 0,
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 30,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
        fontSize: 10,
    },
});

export default CategoryFilm;
