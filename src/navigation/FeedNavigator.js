import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FeedStack = createStackNavigator(
  {
    Feed: FeedScreen,
  },
  config
);

FeedStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      source={require('../../assets/img/icons/timeline.png')}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
  },
  config
);

ActivityStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon style={{ backgroundColor: 'transparent'}} source={require('../../assets/img/icons/love.png')} focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

ActivityStack.path = '';

const UploadStack = createStackNavigator(
  {
    Upload: UploadScreen,
  },
  config
);

UploadStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} source={require('../../assets/img/icons/compose.png')} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

UploadStack.path = '';

const ProfileStack = createStackNavigator(
    {
      Profile: ProfileScreen,
    },
    config
  );
  
  ProfileStack.navigationOptions = {
    tabBarLabel: '',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} source={require('../../assets/img/icons/user.png')} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
  };
  
  ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  FeedStack,
  UploadStack,
  ActivityStack,
  ProfileStack,
}, {
  tabBarOptions: {
    indicatorStyle: {
        backgroundColor: '#004f5a',
    },
    activeTintColor: '#004f5a',
    pressColor: '#004f5a',
    style: {
      backgroundColor: '#000',
    }
  }
});

tabNavigator.path = 'Tabs';

export default tabNavigator;