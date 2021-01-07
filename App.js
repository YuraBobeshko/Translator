import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import AudioAnalyser from "./AudioAnalyser";

const styles = StyleSheet.create({
  block: {
    weight: 100,
    height: 100,
    color: "red",
  },
});

export default function App() {
  const [height, setHeight] = useState(0);
  const [audio, setAudio] = useState(null);

  // useEffect(() => {
  //   const cycle = setInterval(() => {
  //     console.log(height, state);
  //     setHeight((prevHeight) => prevHeight + state);
  //   }, 300);
  //   return () => clearInterval(cycle);
  // }, []);

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    setAudio(audio);
  };

  const stopMicrophone = () => {
    audio.getTracks().forEach((track) => track.stop());
    setAudio(null);
  };

  const toggleMicrophone = () => {
    if (audio) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  };

  return (
    <View
      style={{
        margin: 5,
      }}
    >
      <Button
        style={{
          marginBottom: 500,
        }}
        onPress={toggleMicrophone}
        title={"setIsWriting"}
      />
      {audio && (
        <AudioAnalyser height={height} setHeight={setHeight} audio={audio} />
      )}
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          marginTop: height * 1.5,
        }}
      >
        <Text>{height}</Text>
      </View>
    </View>
  );
}
