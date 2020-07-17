import React from 'react';
import { Image } from 'react-native';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Image
        name={props.name}
        source={props.source}
        style={{ marginBottom: -3, backgroundColor: 'transparent', height: 35, width: 35 }}
        resizeMode='cover' 
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}