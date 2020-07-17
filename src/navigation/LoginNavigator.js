import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, YellowBox } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/LoginScreen";


const LoginNavigator = createStackNavigator({
    Login: LoginScreen
});

LoginNavigator.navigationOptions = {
    headerMode: null,
    headerShown: false
};
LoginNavigator.path = '/';

export default LoginNavigator;