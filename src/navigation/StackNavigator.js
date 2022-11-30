import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmPhoneScreen from '../screens/ConfirmPhoneScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import MoviesLibraryScreen from '../screens/MoviesLibraryScreen';
import DetailFilmScreen from '../screens/DetailFilmScreen';

import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigationOfLogin = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmPhone" component={ConfirmPhoneScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={ResetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const StackNavigationOfMain = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="MoviesLibrary"
                component={MoviesLibraryScreen}
                options={({ route }) => ({ title: route.params.type })}
            />
            <Stack.Screen
                name="DetailFilm"
                component={DetailFilmScreen}
                options={({ route }) => ({ title: route.params.nameFilm })}
            />
        </Stack.Navigator>
    );
};

export { StackNavigationOfLogin, StackNavigationOfMain };
