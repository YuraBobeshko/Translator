import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import AudioAnalyser from "./AudioAnalyser";

export default function App() {
  const [audio, setAudio] = useState(null);

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
  console.log(audio);
  return (
    <View>
      <Button onPress={toggleMicrophone} title={"setIsWriting"} />
      {audio && <AudioAnalyser audio={audio} />}
    </View>
  );
}

const styles = StyleSheet.create({});
