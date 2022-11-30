import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pw = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn('Register');
        navigation.navigate('ConfirmPhone');
    };

    const onSignInPressed = () => {
        console.warn('Sign in');
        navigation.navigate('SignIn');
    };

    const onTermOfUsePressed = () => {
        console.warn('onTermOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    name="phonenumber"
                    control={control}
                    placeholder="Số điện thoại"
                    rules={{ required: 'Bạn cần nhập số điện thoại' }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                    rules={{ required: 'Bạn cần nhập mật khẩu' }}
                />
                <CustomInput
                    name="password-repeat"
                    control={control}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={true}
                    rules={{ validate: (value) => value === pw || 'Mật khẩu không giống nhau' }}
                />

                <CustomButton onPress={handleSubmit(onRegisterPressed)} text="Đăng ký" />
                <Text style={styles.text}>
                    Bằng việc đăng ký, bạn dã chấp nhận các{' '}
                    <Text style={styles.link} onPress={onTermOfUsePressed}>
                        điều khoản
                    </Text>{' '}
                    cũng như{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        chính sách riêng
                    </Text>{' '}
                    của chúng tôi.
                </Text>
                <CustomButton onPress={onSignInPressed} text="Bạn đã có tài khoản? Đăng nhập" type="TERTIARY" />
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

export default SignUpScreen;
