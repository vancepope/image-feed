import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import RegisterScreen from "../screens/RegisterScreen";


const RegisterNavigator = createStackNavigator({
    Register: RegisterScreen
});

RegisterNavigator.navigationOptions = {
  headerMode: 'screen',
  headerStyle: {
      backgroundColor: '#c01b33',
      color: '#fff',
  },
};
RegisterNavigator.path = '';

export default RegisterNavigator;