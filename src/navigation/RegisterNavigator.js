import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, YellowBox } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
//import RegisterScreen from "../screens/RegisterScreen";


const RegisterNavigator = createStackNavigator({
    Regiter: {
        screen: RegisterScreen
	}
});

RegisterNavigator.navigationOptions = {
    headerMode: null,
    headerShown: false
};
RegisterNavigator.path = '';

export default RegisterNavigator;