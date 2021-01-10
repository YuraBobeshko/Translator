import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing } from "react-native";

import styles from "./styles";

const Field = ({ height, audio, onLose }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      })
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
      audio
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
  console.log(fadeAnim);
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
        <Text style={styles.text}>{-(height - 700)}</Text>
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

export default Field;
