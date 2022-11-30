// ./navigation/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import PersonalScreen from '../screens/PersonalScreen';
import { StackNavigationOfMain } from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
                iconName = 'home';
            } else if (route.name === 'Giỏ hàng') {
                iconName = 'price-tag';
            } else if (route.name === 'Cá nhân') {
                iconName = 'bell';
            }

            // You can return any component that you like here!
            return <Entypo name={iconName} size={size} color={color} />;
        },
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={screenOptions}
                tabBarOptions={{
                    activeTintColor: '#FB7200',
                    inactiveTintColor: '#464962',
                }}
            >
                <Tab.Screen name="Trang chủ" component={StackNavigationOfMain} options={{ headerShown: false }} />
                <Tab.Screen name="Giỏ hàng" component={ShoppingCartScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Cá nhân" component={PersonalScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;
