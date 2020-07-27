import React from 'react';
import { Image } from 'react-native';

export default function TabBarIcon(props) {
  return (
      <Image
          name={props.name}
          source={props.source}
          style={{ marginBottom: 0, backgroundColor: 'transparent', height: 30, width: 30, tintColor: (props.focused) ? '#c01b33' : '#d3d3d3'}}
          resizeMode='contain' 
      />
  );
}