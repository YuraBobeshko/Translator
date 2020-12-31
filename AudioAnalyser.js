import React from "react";

const AudioAnalyser = ({ audio }) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)(),
    source = audioContext.createMediaStreamSource(audio),
    analyser = audioContext.createAnalyser(),
    processor = audioContext.createScriptProcessor(2048, 1, 1);

  let dataArray;

  // this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  // this.source = this.audioContext.createMediaStreamSource(this.props.audio);
  // this.analyser = this.audioContext.createAnalyser();
  // this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

  analyser.fftSize = 32;
  source.connect(analyser);
  source.connect(processor);
  //   analyser.connect(audioContext.destination); for hearing himself
  processor.connect(audioContext.destination);
  dataArray = new Uint8Array(analyser.frequencyBinCount);

  setTimeout(() => {
    processor.stop();
  }, 1000);

  processor.onaudioprocess = () => {
    analyser.getByteFrequencyData(dataArray);
    console.log(dataArray);
  };

  return <div></div>;
};

export default AudioAnalyser;
