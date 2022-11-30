import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmPhoneScreen from '../screens/ConfirmPhoneScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import MoviesLibraryScreen from '../screens/MoviesLibraryScreen';

import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmPhone" component={ConfirmPhoneScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={ResetPasswordScreen} />

                <Stack.Screen name="Main" component={TabNavigator} />
                <Stack.Screen
                    name="MoviesLibrary"
                    component={MoviesLibraryScreen}
                    options={({ route }) => ({ title: route.params.type, headerShown: true })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
