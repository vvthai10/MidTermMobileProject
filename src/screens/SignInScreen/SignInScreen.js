import React, { useContext } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../components/context';
import NotifyModal from '../../components/NotifyModal/NotifyModal';

const SignInScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.warn(errors);

    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const { signIn } = useContext(AuthContext);
    const onSignInPressed = (data) => {
        const phone = data.phonenumber;
        const password = data.password;
        // console.warn(`${phone} and ${password}`);
        signIn(phone, password);

        // navigation.navigate('Main');
    };

    // const onForgotPasswordPressed = () => {
    //     console.warn('Forgot password');
    //     navigation.navigate('ForgotPassword');
    // };

    const onSignUpPressed = () => {
        // console.log(data);
        navigation.navigate('SignUp');
    };

    const changeModalVisible = () => {
        console.log('Tắt sự xuất hiện của nó đi');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image style={[styles.logo, { height: height * 0.3 }]} source={Logo} resizeMode="contain" />

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
                    rules={{
                        required: 'Bạn cần nhập mật khẩu',
                        minLength: {
                            value: 6,
                            message: 'Mật khẩu cần ít nhất 6 kí tự',
                        },
                    }}
                />

                <CustomButton onPress={handleSubmit(onSignInPressed)} text="Đăng nhập" />
                {/* <CustomButton onPress={onForgotPasswordPressed} text="Quên mật khẩu" type="TERTIARY" /> */}
                <CustomButton
                    onPress={onSignUpPressed}
                    text="Bạn chưa có tài khoản? Đăng kí tài khoản"
                    type="TERTIARY"
                />

                {/* <Modal
                    transparent={true}
                    animationType="fade"
                    visible={true}
                    nRequestClose={() => {
                        console.log(true);
                    }}
                >
                    <NotifyModal />
                </Modal> */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
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
    input: {},
});

export default SignInScreen;
