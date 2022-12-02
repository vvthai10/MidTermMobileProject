/* eslint-disable no-unused-vars */
import React, { useContext, useState, useCallback } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../components/context';
import NotifyModal from '../../components/NotifyModal/NotifyModal';
// import ListUsers from '../../../assets/data/listUsers';

const SignInScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // console.warn(ListUsers.filter((e) => e.phone === '0987654321'));

    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const { signIn } = useContext(AuthContext);
    const [infoUser, setInfoUser] = useState([]);
    const [isHasNotify, setHasNotify] = useState(false);
    const [infoNotify, setInfonotify] = useState();

    const fetchCheckUser = async (phone, password) => {
        try {
            const res = await fetch(`/api/login?phone=${phone}`);
            const data = await res.json();
            // console.log(`Data is: ${data}`);
            setInfoUser(data || []);

            if (infoUser.length === 0) {
                console.log('Không tồn tại user');
                setInfonotify({
                    title: 'Tài khoản không tồn tại',
                    description: 'Chưa có số tài khoản nào đăng kí bằng số điện thoại này.',
                });
                setHasNotify(true);
            } else if (password !== infoUser[0].password) {
                setInfonotify({
                    title: 'Mật khẩu không chính xác',
                    description: 'Mật khẩu bạn nhập chưa chính xác',
                });
                setHasNotify(true);
            } else {
                // Sau khi kiểm tra user có tồn tại trong tài khoản thì mới tới bước tiếp theo
                signIn(infoUser[0]);
            }
        } catch (error) {}
    };

    // console.log(ListUsers);

    const onSignInPressed = async (data) => {
        // console.log('Check USer');
        const phone = data.phonenumber;
        const password = data.password;

        const res = await fetch(`/api/login?phone=${phone}`);
        const user = await res.json();

        if (user.length === 0) {
            console.log('Không tồn tại user');
            setInfonotify({
                title: 'Tài khoản không tồn tại',
                description: 'Chưa có số tài khoản nào đăng kí bằng số điện thoại này.',
            });
            setHasNotify(true);
        } else if (password !== user[0].password) {
            setInfonotify({
                title: 'Mật khẩu không chính xác',
                description: 'Mật khẩu bạn nhập chưa chính xác',
            });
            setHasNotify(true);
        } else {
            // Sau khi kiểm tra user có tồn tại trong tài khoản thì mới tới bước tiếp theo
            signIn(user[0]);
        }

        // console.log(`${phone} ${password}`);
        // await fetchCheckUser(phone, password);

        // console.log(infoUser[0].password);
    };

    // const onForgotPasswordPressed = () => {
    //     console.warn('Forgot password');
    //     navigation.navigate('ForgotPassword');
    // };

    const onSignUpPressed = () => {
        // console.log(data);
        navigation.navigate('SignUp');
    };
    const changeErrorType = (type) => {
        setHasNotify(type);
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

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isHasNotify}
                    nRequestClose={() => {
                        console.log(true);
                    }}
                >
                    <NotifyModal changeErrorType={changeErrorType} info={infoNotify} />
                </Modal>
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
