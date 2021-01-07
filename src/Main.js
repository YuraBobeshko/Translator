import React, { useState } from "react";
import { Button } from "react-native";
import { Field } from "./components";
import AudioAnalyser from "./hooks/AudioAnalyser";

const Main = () => {
  const [audio, setAudio] = useState(null);
  const height = AudioAnalyser(audio);

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
    <>
      <Button onPress={toggleMicrophone} title={audio ? "pause" : "start"} />
      <Field
        height={height}
        audio={audio}
        toggleMicrophone={toggleMicrophone}
      />
    </>
  );
};

export default Main;
