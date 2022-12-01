import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DateFilm = ({ item }) => {
    const Icon = item.icon;
    const navigation = useNavigation();
    const [date, setDate] = useState(0)

    setDate(Date().toLocaleLowerCase());

    /// Thay vì nhảy sang màn hình khác, thì nó sẽ thực hiện cập nhật biến ngày
    const onDateFilmPressed = () => {
        setDate(item.date);
    };

    return (
        <TouchableOpacity style={styles.categoryBtn} onPress={onDateFilmPressed}>
            <Text style={styles.categoryBtnTxt}>{item.date}</Text>
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
