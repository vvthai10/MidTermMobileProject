import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PersonalScreen = () => {
    const [token, setToken] = useState();

    const getInfoUser = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        setToken(userToken);
    };

    getInfoUser();

    const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Text>Hello, PersonalScreen</Text>
            <Pressable onPress={signOut}>
                <Text>{token}</Text>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({});

export default PersonalScreen;
