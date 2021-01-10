import { useEffect, useState } from "react";

const getNormalizedValue = (dataArray) =>
  dataArray.reduce((sum, num) => sum + num, 0) / dataArray.length > 40 ? -1 : 1;

const AudioAnalyser = (audio, res) => {
  const [height, setHeight] = useState(200);

  useEffect(() => {
    setHeight(200);
  }, [res]);

  let rafId, audioContext, analyser, dataArray, source;

  const tick = () => {
    if (audio.active) {
      analyser.getByteFrequencyData(dataArray);
      const value = getNormalizedValue(dataArray);

      setHeight((prevHeight) => {
        const sum = prevHeight + value;
        if (sum > 378 && sum < 380) return 378;
        if (sum > -2 && sum < 0) return 1;
        return sum;
      });
      rafId = requestAnimationFrame(tick);
    } else {
      setHeight((prevHeight) => {
        const sum = prevHeight;
        if (sum > 378 && sum < 380) return 200;
        if (sum > -2 && sum < 0) return 200;
        return prevHeight;
      });
    }
  };

  useEffect(() => {
    if (audio) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 32;
      // analyser.connect(audioContext.destination);
      dataArray = new Uint8Array(analyser.frequencyBinCount);
      source = audioContext.createMediaStreamSource(audio);
      source.connect(analyser);
      rafId = requestAnimationFrame(tick);
    }
  }, [audio]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, []);

  return height;
};

export default AudioAnalyser;
