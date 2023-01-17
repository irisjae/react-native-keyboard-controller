import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ScreenNames } from '../../constants/screenNames';
import KeyboardAnimation from '../../screens/Examples/KeyboardAnimation';
import ReanimatedChat from '../../screens/Examples/ReanimatedChat';
import Events from '../../screens/Examples/Events';
import AwareScrollView from '../../screens/Examples/AwareScrollView';
import StatusBar from '../../screens/Examples/StatusBar';
import LottieAnimation from '../../screens/Examples/Lottie';
import NonUIProps from '../../screens/Examples/NonUIProps';
import AnimatedRef from '../../screens/Examples/AnimatedRef';

export type ExamplesStackParamList = {
  [ScreenNames.ANIMATED_EXAMPLE]: undefined;
  [ScreenNames.REANIMATED_CHAT]: undefined;
  [ScreenNames.EVENTS]: undefined;
  [ScreenNames.AWARE_SCROLL_VIEW]: undefined;
  [ScreenNames.STATUS_BAR]: undefined;
  [ScreenNames.LOTTIE]: undefined;
  [ScreenNames.NON_UI_PROPS]: undefined;
  [ScreenNames.ANIMATED_REF]: undefined;
};

const Stack = createStackNavigator<ExamplesStackParamList>();

const options = {
  [ScreenNames.ANIMATED_EXAMPLE]: {
    title: 'Keyboard animation ⌨️',
  },
  [ScreenNames.REANIMATED_CHAT]: {
    title: 'Chat',
  },
  [ScreenNames.EVENTS]: {
    title: 'Events',
  },
  [ScreenNames.AWARE_SCROLL_VIEW]: {
    title: 'Aware scroll view',
  },
  [ScreenNames.STATUS_BAR]: {
    headerShown: false,
    title: 'Status bar manipulation',
  },
  [ScreenNames.LOTTIE]: {
    title: 'Lottie animation',
  },
  [ScreenNames.NON_UI_PROPS]: {
    title: 'Non UI Props',
  },
  [ScreenNames.ANIMATED_REF]: {
    title: 'Animated Ref',
  },
};

const ExamplesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ScreenNames.ANIMATED_EXAMPLE}
      component={KeyboardAnimation}
      options={options[ScreenNames.ANIMATED_EXAMPLE]}
    />
    <Stack.Screen
      name={ScreenNames.REANIMATED_CHAT}
      component={ReanimatedChat}
      options={options[ScreenNames.REANIMATED_CHAT]}
    />
    <Stack.Screen
      name={ScreenNames.EVENTS}
      component={Events}
      options={options[ScreenNames.EVENTS]}
    />
    <Stack.Screen
      name={ScreenNames.AWARE_SCROLL_VIEW}
      component={AwareScrollView}
      options={options[ScreenNames.AWARE_SCROLL_VIEW]}
    />
    <Stack.Screen
      name={ScreenNames.STATUS_BAR}
      component={StatusBar}
      options={options[ScreenNames.STATUS_BAR]}
    />
    <Stack.Screen
      name={ScreenNames.LOTTIE}
      component={LottieAnimation}
      options={options[ScreenNames.LOTTIE]}
    />
    <Stack.Screen
      name={ScreenNames.NON_UI_PROPS}
      component={NonUIProps}
      options={options[ScreenNames.NON_UI_PROPS]}
    />
    <Stack.Screen
      name={ScreenNames.ANIMATED_REF}
      component={AnimatedRef}
      options={options[ScreenNames.ANIMATED_REF]}
    />
  </Stack.Navigator>
);

export default ExamplesStack;
