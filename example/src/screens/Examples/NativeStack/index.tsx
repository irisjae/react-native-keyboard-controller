import React from 'react';

import { View } from 'react-native';
import KeyboardAnimation from '../KeyboardAnimation';

function NativeStack() {
  return (
    <View style={{ flex: 1, backgroundColor: 'pink' }}>
      <KeyboardAnimation />
    </View>
  );
}

export default NativeStack;
