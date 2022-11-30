import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmPhoneScreen = () => {
    const [code, setCode] = useState('');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.warn(errors);
    const onConfirmPressed = () => {
        console.warn('Confirm');
        navigation.navigate('Main');
    };

    const onResendPressed = () => {
        console.warn('Resend');
    };

    const onSignInPressed = () => {
        console.warn('sign in');
        navigation.navigate('SignIn');
    };

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Xác nhận số điện thoại</Text>

                <CustomInput
                    name="phonenumber"
                    control={control}
                    placeholder="Mã xác nhận"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton onPress={onConfirmPressed} text="Xác nhận" />

                <CustomButton onPress={onResendPressed} text="Gửi lại mã xác nhận" type="SECONDARY" />
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

export default ConfirmPhoneScreen;
