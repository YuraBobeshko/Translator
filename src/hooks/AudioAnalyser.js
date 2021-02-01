import { useEffect, useState } from "react";

const AudioAnalyser = (data, setData) => {
  const [audio, setAudio] = useState(null);
  let rafId, audioContext, analyser, dataArray, source;

  // useEffect(() => {
  //   setData((prevState) => ({ ...prevState, height: 200 }));
  // }, [res]);

  // const getMicrophone = async () => {
  //   const audio = await navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: false,
  //   });
  //   setAudio(audio);
  // };

  // const stopMicrophone = () => {
  //   audio.getTracks().forEach((track) => track.stop());
  //   setAudio(null);
  // };

  const getNormalizedValue = (dataArray, sensitivityMicrophone) => {
    const volum =
      dataArray.reduce((sum, num) => sum + num, 0) / dataArray.length;
    const value = volum > sensitivityMicrophone ? -1 : 1;

    return { value, volum };
  };

  // useEffect(() => {
  //   if (toggleMicrophone && !audio) {
  //     getMicrophone();
  //   }
  //   if (!toggleMicrophone && audio) {
  //     stopMicrophone();
  //   }
  // }, [toggleMicrophone]);

  const tick = () => {
    // if (audio.active) {
    analyser.getByteFrequencyData(dataArray);
    setData((prevHeight) => {
      const { value, volum } = getNormalizedValue(
        dataArray,
        prevHeight.sensitivityMicrophone
      );
      const height = prevHeight.isPlaying
        ? prevHeight.height + value
        : prevHeight.height;

      // if (height > 378 && height < 380) return { height: 378, volum };
      // if (height > -2 && height < 0) return { height: 1, volum };
      return { ...prevHeight, height, volum };
    });
    rafId = requestAnimationFrame(tick);
    // } else {
    //   setData(({ height, volum }) => {
    //     // if (height > 378 && height < 380) return { height: 200, volum };
    //     // if (height > -2 && height < 0) return { height: 200, volum };
    //     return { height, volum };
    //   });
    // }
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
    (async () => {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });

      setAudio(audio);
    })();

    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, []);

  return data;
};

export default AudioAnalyser;
