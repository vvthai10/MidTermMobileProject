import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ResetPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onSubmitPressed = () => {
        console.warn('Confirm');
        navigation.navigate('SignIn');
    };

    const onSignInPressed = () => {
        console.warn('sign in');
        navigation.navigate('SignIn');
    };

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Đặt lại mật khẩu</Text>

                <CustomInput placeholder="Mã xác nhận" value={code} setValue={setCode} />
                <CustomInput placeholder="Mật khẩu mới" value={newPassword} setValue={setNewPassword} />

                <CustomButton onPress={onSubmitPressed} text="Đặt lại mật khẩu" />
                <CustomButton onPress={onSignInPressed} text="Quay lại đăng nhập" type="TERTIARY" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    text: { color: 'gray', marginVertical: 10 },
    link: {
        color: '#FDB075',
    },
});

export default ResetPasswordScreen;
