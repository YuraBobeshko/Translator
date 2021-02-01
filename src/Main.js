import React, { useState, useCallback } from "react";
import { Button, View } from "react-native";
import { Settings } from "./components";
import { FieldBottomTopLine } from "./components/Fields";
import globalStyles from "./globalStyles";
import AudioAnalyser from "./hooks/AudioAnalyser";

const Main = () => {
  const [data, setData] = useState({
    height: 200,
    volum: 1,
    isPlaying: false,
    sensitivityMicrophone: 40,
  });

  const { height, volum, sensitivityMicrophone, isPlaying } = AudioAnalyser(
    data,
    setData
  );

  const onLose = useCallback(() => {
    setData((prevState) => ({
      ...prevState,
      height: 200,
      isPlaying: false,
    }));
  });

  const setSensitivityMicrophone = (sensitivityMicrophone) => {
    setData((prevState) => ({
      ...prevState,
      volum: sensitivityMicrophone,
    }));w
  };

  const getCurrentField = () => {
    switch (type) {
      case 1:
        return (
          <FieldBottomTopLine
            isPlaying={data.isPlaying}
            height={height}
            onLose={onLose}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      {!isPlaying && (
        <Button
          onPress={() =>
            setData((prevState) => ({
              ...prevState,
              isPlaying: !prevState.isPlaying,
            }))
          }
          title={isPlaying ? "pause" : "start"}
        />
      )}
      <View style={globalStyles.wrapperField}>
        <FieldBottomTopLine
          isPlaying={isPlaying}
          height={height}
          onLose={onLose}
        />
        <Settings
          volum={volum.toFixed()}
          sensitivityMicrophone={sensitivityMicrophone}
          setSensitivityMicrophone={setSensitivityMicrophone}
        />
      </View>
    </>
  );
};

export default Main;
