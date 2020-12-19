import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import getMedia from "./hook";

export default function App() {
  const [running, setRunning, features] = getMedia();

  return (
    <View>
      <Button
        onPress={() => setRunning((prevState) => !prevState)}
        title={"setIsWriting"}
      />
      <Text>RMS: {features && features.rms}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
