import React from 'react';

import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.2, // iOS
    elevation: 5 // android
  },
  textStyle: {
    fontSize: 20,
  }
};

export default Header;
