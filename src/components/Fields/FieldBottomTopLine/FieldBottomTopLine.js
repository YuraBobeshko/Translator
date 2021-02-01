import React, { useEffect, useRef, memo } from "react";
import { View, Text, Animated, Easing } from "react-native";

import styles from "./styles";

const FieldBottomTopLine = ({ height, onLose, isPlaying }) => {
  console.log(isPlaying);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        usenativedriver: true,
      }),
      { usenativedriver: true }
    ).start();
  }, [fadeAnim]);

  const refBlock = useRef();
  const refLineBottom = useRef();
  const refLineTop = useRef();

  useEffect(() => {
    if (
      refBlock.current &&
      refLineBottom.current &&
      refLineTop.current &&
      isPlaying
    ) {
      if (
        refLineBottom.current.getBoundingClientRect().bottom >
          refBlock.current.getBoundingClientRect().top ||
        refBlock.current.getBoundingClientRect().bottom >
          refLineTop.current.getBoundingClientRect().top
      ) {
        onLose();
        alert("лузер");
      }
    }
  }, [height]);

  return (
    <View style={styles.wrapperField}>
      <Animated.View
        ref={refLineBottom}
        style={[
          styles.line,
          {
            top: fadeAnim
              .interpolate({
                inputRange: [0, 1],
                outputRange: [1, 3],
              })
              .interpolate({
                inputRange: [1, 2, 3],
                outputRange: [50, 200, 50],
              }),
          },
        ]}
      />
      <View
        ref={refBlock}
        style={[
          styles.block,
          {
            top: height * 1.5,
          },
        ]}
      >
        <Text style={styles.text}>{height}</Text>
      </View>
      <Animated.View
        ref={refLineTop}
        style={[
          styles.line,
          {
            top: fadeAnim
              .interpolate({
                inputRange: [0, 1],
                outputRange: [1, 3],
              })
              .interpolate({
                inputRange: [1, 2, 3],
                outputRange: [450, 600, 450],
              }),
          },
        ]}
      />
    </View>
  );
};

export default FieldBottomTopLine;
