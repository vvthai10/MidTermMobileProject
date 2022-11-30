/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { View, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StackNavigationOfLogin, StackNavigationOfMain } from './src/navigation/StackNavigator';
import TabNavigator from './src/navigation/TabNavigator';

import { AuthContext } from './src/components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    // const [isLoading, setIsLoading] = useState(true);
    // const [userToken, setUserToken] = useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                console.log(`${action.id} and ${action.token}`);
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authContext = useMemo(
        () => ({
            signIn: async (userName, password) => {
                let userToken;
                userToken = null;
                console.error(`${userName} and ${password}`);
                if (userName == 'user' && password == '123456') {
                    userToken = 'oujnhgj';
                    try {
                        await AsyncStorage.setItem('userToken', userToken);
                    } catch (e) {
                        // saving error
                        console.log(e);
                        console.warn(e);
                    }
                }
                console.log('Login success');
                dispatch({ type: 'LOGIN', id: userName, token: userToken });
            },
            signOut: async () => {
                try {
                    await AsyncStorage.removeItem('userToken');
                } catch (e) {
                    // saving error
                    console.log(e);
                }
                dispatch({ type: 'LOGOUT' });
            },
            signUp: () => {
                dispatch({ type: 'REGISTER', id: 'abcd', token: '12345' });
            },
        }),
        [],
    );

    useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // saving error
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <AuthContext.Provider value={authContext}>
            <SafeAreaView style={styles.root}>
                {/* <SignInScreen /> */}
                {console.log(loginState.userToken)}

                {loginState.userToken != null ? <TabNavigator /> : <StackNavigationOfLogin />}
            </SafeAreaView>
        </AuthContext.Provider>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'F9FBFC',
    },
});

export default App;
