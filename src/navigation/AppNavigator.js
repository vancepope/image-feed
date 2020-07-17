import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import FeedNavigator from './FeedNavigator';
import LoginNavigator from './LoginNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    Login: LoginNavigator,
    Feed: FeedNavigator,
  })
);