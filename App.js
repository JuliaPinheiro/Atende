import React from 'react';
import {  View } from 'react-native';
import title from './src/components/title';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <title/>
    </View>
  );
}

export default YourApp;