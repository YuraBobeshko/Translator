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
    analyser.getByteFrequencyData(dataArray);
    // setAudioData(dataArray);
    const value =
      dataArray.reduce((sum, num) => sum + num, 0) / dataArray.length > 50
        ? 1
        : -1;
    setHeight((prevHeight) => prevHeight + value);
    console.log(
      dataArray.reduce((sum, num) => sum + num, 0) / dataArray.length
    );
    rafId = requestAnimationFrame(tick);
  };

  useEffect(() => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 32;
    // analyser.connect(audioContext.destination);
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

  // console.log(dataArray);

  return null;
});

export default AudioAnalyser;
