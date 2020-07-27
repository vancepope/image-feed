import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import FeedScreen from '../screens/FeedScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import AddButton from '../components/AddButton';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const addConfig = Platform.select({
  web: { headerMode: 'none' },
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
      source={require('../../assets/img/icons/033-help.png')}
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

const AddStack = createStackNavigator(
  {
    Add: () => null,
  },
  addConfig,
  
);

AddStack.navigationOptions = {
  screen: () => null,
  tabBarOnPress: () => null,
  tabBarIcon: <AddButton />,
  headerMode: 'none',
  headerShown: false,
  
};

UploadStack.navigationOptions = {
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} source={require('../../assets/img/icons/compose.png')} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
  headerStyle: {
    backgroundColor: '#c01b33',
  }
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
  AddStack,
  ActivityStack,
  ProfileStack,
}, {
  tabBarOptions: {
    indicatorStyle: {
        backgroundColor: '#fff',
        height: 25
    },
    activeTintColor: '#fff',
    pressColor: '#004f5a',
    style: {
      backgroundColor: '#fff',
      height: 40
    },
    showLabel: false,
  }
});

tabNavigator.path = 'Tabs';

export default tabNavigator;