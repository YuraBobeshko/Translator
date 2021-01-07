import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import AudioAnalyser from "./AudioAnalyser";

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
  // console.log(audio);
  return (
    <View>
      <Button onPress={toggleMicrophone} title={"setIsWriting"} />
      {audio && (
        <AudioAnalyser height={height} setHeight={setHeight} audio={audio} />
      )}
      <Text>{height}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
