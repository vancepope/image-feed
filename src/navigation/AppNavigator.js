import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import FeedNavigator from './FeedNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    Feed: FeedNavigator,
  })
);