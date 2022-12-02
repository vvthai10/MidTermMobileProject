/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, Image } from 'react-native';
import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import User from '../../../assets/images/user.png';
import Background from '../../../assets/images/background.png';
import ListUsers from '../../../assets/data/listUsers';
const PersonalScreen = () => {
    const [token, setToken] = useState();
    const [name, setName] = useState('');

    const getInfoUser = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        setToken(userToken);
        let item = await ListUsers.find(({ phone }) => phone === token);
        setName(item.name);
    };

    getInfoUser();

    const { signOut } = useContext(AuthContext);
    return (
        <View style={styles.screenContainerJb} scrollable={true} hasSafeArea={false}>
            <ImageBackground style={styles.imageBackgroundNb} source={Background} resizeMode="cover" />
            <View style={styles.containerEA} elevation={0} useThemeGutterPadding={true}>
                <Image style={StyleSheet.flatten([styles.imageA3])} resizeMode="cover" source={User} />
                <Text style={StyleSheet.flatten([styles.textPr])}>{name}</Text>
                <Pressable onPress={signOut} style={styles.button}>
                    <Text>Sign out</Text>
                </Pressable>
            </View>
            <View useThemeGutterPadding={true} elevation={0}>
                <Text style={StyleSheet.flatten([styles.touchableOk])}>Hello, every one.</Text>
            </View>
        </View>
    );
};

export default PersonalScreen;

const styles = StyleSheet.create({
    screenContainerJb: {
        justifyContent: 'space-evenly',
    },
    imageBackgroundNb: {
        width: '100%',
        height: 250,
    },
    imageA3: {
        height: 120,
        width: 120,
    },
    containerEA: {
        alignItems: 'center',
        marginTop: -65,
    },
    textPr: {
        width: '100%',
        textAlign: 'center',
        marginTop: 16,
    },
    touchableOk: {
        borderTopWidth: 1,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 32,
    },
    buttonP2: {
        marginTop: 16,
        alignSelf: 'center',
        width: '50%',
    },
    button: {
        maxWidth: 100,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderWidth: 1,
        elevation: 3,
        backgroundColor: '#fff',
    },
});
