import React from "react";
import { View, Text } from "react-native";

const Settings = ({
  volum,
  sensitivityMicrophone,
  setSensitivityMicrophone,
}) => {
  return (
    <View>
      <Text>{volum}</Text>
      <input readOnly value={volum} type="range" min="1" max="255" />
      <input
        onChange={({ target }) => setSensitivityMicrophone(+target.value)}
        value={sensitivityMicrophone}
        type="range"
        min="1"
        max="255"
      />
      <Text>{sensitivityMicrophone}</Text>
    </View>
  );
};

export default Settings;
