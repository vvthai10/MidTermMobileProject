import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AuthContext } from '../../components/context';
const PersonalScreen = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Text>Hello, PersonalScreen</Text>
            <Pressable onPress={signOut}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({});

export default PersonalScreen;
