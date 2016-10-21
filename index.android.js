import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/header';

const App = () => {
  return (
    <View>
      <Header headerText="Albums" />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
