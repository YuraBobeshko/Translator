import React, { useEffect, memo } from "react";
import { Text } from "react-native";

const AudioAnalyser = memo(({ setHeight, height, audio }) => {
  // const [audioData, setAudioData] = useState(new Uint8Array(0));
  let rafId,
    audioContext,
    analyser,
    dataArray = new Uint8Array(0),
    source;

  const tick = () => {
    analyser.getByteTimeDomainData(dataArray);
    // setAudioData(dataArray);
    setHeight((prevHeight) => prevHeight + 1);
    console.log(dataArray);
    rafId = requestAnimationFrame(tick);
  };

  useEffect(() => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 32;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    source = audioContext.createMediaStreamSource(audio);
    source.connect(analyser);
    rafId = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, []);

  console.log(dataArray);

  return null;
});

export default AudioAnalyser;
