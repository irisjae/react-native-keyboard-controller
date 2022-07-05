import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenNames } from '../../constants/screenNames';
import NativeStack from '../../screens/Examples/NativeStack';

type ExamplesStackParamList = {
  [ScreenNames.NATIVE_STACK]: undefined;
};

const Stack = createNativeStackNavigator<ExamplesStackParamList>();

const ExamplesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.NATIVE_STACK}
      component={NativeStack}
      options={{ title: 'Native stack', statusBarStyle: 'dark' }}
    />
  </Stack.Navigator>
);

export default ExamplesStack;
