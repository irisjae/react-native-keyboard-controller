import React, { useCallback, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import {
  KeyboardEvents,
  useReanimatedKeyboardAnimation,
  useGradualKeyboardAnimation,
  useKeyboardAnimation
} from 'react-native-keyboard-controller';
import Reanimated, {
  Easing,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Message from '../../../components/Message';
import { history } from '../../../components/Message/data';
import styles from './styles';

const AnimatedTextInput = Reanimated.createAnimatedComponent(TextInput);

function ReanimatedChat() {
  const scrollView = useAnimatedRef<Reanimated.ScrollView>();
  const { height } = useGradualKeyboardAnimation();

  const scrollToBottom = useCallback(() => {
    scrollView.current?.scrollToEnd({ animated: false });
  }, []);

  /*useEffect(() => {
    const show = KeyboardEvents.addListener('keyboardWillShow', (e) => {
      height.value = withTiming(-e.height, {
        duration: e.duration + 50,
        easing: Easing.bezier(0.17, 0.59, 0.4, 0.77),
      });
    });
    const hide = KeyboardEvents.addListener('keyboardWillHide', (e) => {
      height.value = withTiming(0, {
        duration: e.duration + 50,
        easing: Easing.bezier(0.17, 0.59, 0.4, 0.77),
      });
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);*/

  const scrollViewStyle = useAnimatedStyle(
    () => ({
      // transform: [{ translateY: height.value }],
    }),
    []
  );
  const height2 = useAnimatedStyle(
    () => ({
      height: Math.abs(height.value),
    }),
    []
  );
  const textInputStyle = useAnimatedStyle(
    () => ({
      height: 50,
      width: '100%',
      backgroundColor: 'yellow',
      // transform: [{ translateY: height.value }],
    }),
    []
  );
  const fakeView = useAnimatedStyle(
    () => ({
      height: Math.abs(height.value),
    }),
    []
  );

  return (
    <View style={styles.container}>
      <Reanimated.ScrollView
        ref={scrollView}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}
        style={scrollViewStyle}
        contentInset={{bottom: 200}}
      >
        {history.map((message, index) => (
          <Message key={index} {...message} />
        ))}
        <Reanimated.View style={height2} />
      </Reanimated.ScrollView>
      <AnimatedTextInput style={textInputStyle} />
    </View>
  );
}

export default ReanimatedChat;
