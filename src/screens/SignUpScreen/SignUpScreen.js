import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../components/context';
import NotifyModal from '../../components/NotifyModal/NotifyModal';

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pw = watch('password');
    const navigation = useNavigation();

    const { signUp } = useContext(AuthContext);
    const [infoUser, setInfoUser] = useState([]);
    const [isHasNotify, setHasNotify] = useState(false);
    const [infoNotify, setInfonotify] = useState();

    const fetchCheckHaveUser = async (phone) => {
        try {
            const res = await fetch(`/api/signin?phone=${phone}`);
            const data = await res.json();
            setInfoUser(data || []);
        } catch (error) {}
    };

    const fetchAddUser = async (params) => {
        //console.log(params);
        try {
            const res = await fetch(`/api/signup`, params);
            const data = await res.json();
            // setInfoUser(data || []);
            //console.log(data);
        } catch (error) {}
    };

    const onRegisterPressed = (data) => {
        const name = data.name;
        const phone = data.phoneNumber;
        const password = data.password;
        const passwordRepeat = data.passwordRepeat;

        // Trường hợp 1: Số điện thoại đã được đăng kí
        fetchCheckHaveUser(phone);
        if (infoUser.length !== 0) {
            setInfonotify({
                title: 'Tài khoản tồn tại',
                description: `Số điện thoại này đã được đăng kí`,
            });
            setHasNotify(true);
        } else {
            //console.log('Đăng kí');
            // Trường hợp 2: Đăng kí thành công
            const params = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, phone: phone, password: password, passwordRepeat: passwordRepeat }),
            };

            fetchAddUser(params);
        }

        // signUp();
        // navigation.navigate('ConfirmPhone');
    };

    const onSignInPressed = () => {
        //console.warn('Sign in');
        navigation.navigate('SignIn');
    };

    const onTermOfUsePressed = () => {
        //console.warn('onTermOfUsePressed');
    };

    const onPrivacyPressed = () => {
        //console.warn('onPrivacyPressed');
    };

    const changeErrorType = (type) => {
        setHasNotify(type);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    name="name"
                    control={control}
                    placeholder="Họ và tên"
                    rules={{ required: 'Bạn cần nhập họ và tên' }}
                />
                <CustomInput
                    name="phoneNumber"
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
                    name="passwordRepeat"
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

                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isHasNotify}
                    nRequestClose={() => {
                        //console.log(true);
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
