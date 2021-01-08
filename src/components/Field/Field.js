import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Field = ({ height, audio, toggleMicrophone }) => {
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
        console.log(1);
        // alert("лузер");
      }
      //   if (
      //     refBlock.current.getBoundingClientRect().bottom >
      //     refBarrier.current.getBoundingClientRect().top
      //   ) {
      //     console.log(
      //       refBlock.current.getBoundingClientRect().bottom,
      //       refBarrier.current.getBoundingClientRect().top
      //     );
      //     alert("лузер");
      //     toggleMicrophone();
      //   }
      console.log(
        refLineBottom.current.getBoundingClientRect().top,
        refBlock.current.getBoundingClientRect().bottom,
        refLineTop.current.getBoundingClientRect().top
      );
    }
  }, [height]);
  return (
    <View style={styles.wrapperField}>
      <View
        ref={refLineBottom}
        style={[
          styles.line,
          {
            top: 50,
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
      <View
        ref={refLineTop}
        style={[
          styles.line,
          {
            top: 600,
          },
        ]}
      />
    </View>
  );
};

export default Field;
