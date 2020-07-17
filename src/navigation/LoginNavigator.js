import React, { Component } from "react";
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