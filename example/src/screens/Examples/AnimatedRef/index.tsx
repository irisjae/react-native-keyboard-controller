import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useGenericKeyboardHandler } from 'react-native-keyboard-controller';
import Reanimated, { useAnimatedRef } from 'react-native-reanimated';

const AnimatedRefExample = () => {
  const animatedRef = useAnimatedRef<Reanimated.ScrollView>();

  useGenericKeyboardHandler(
    {
      onStart: () => {
        'worklet';

        console.log(animatedRef.current);
      },
      onMove: () => {
        'worklet';

        console.log(animatedRef.current);
      },
      onEnd: () => {
        'worklet';

        console.log(animatedRef.current);
      },
    },
    []
  );

  return (
    <Reanimated.ScrollView ref={animatedRef} scrollEventThrottle={16}>
      <TextInput style={styles.input} />
    </Reanimated.ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#7c7c7c',
  },
});

export default AnimatedRefExample;
