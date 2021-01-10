import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapperField: {
    width: 500,
    height: 700,
    backgroundColor: "yellow",
  },
  block: {
    width: 100,
    height: 100,
    right: "50%",
    transform: " translate(50%)",
    backgroundColor: "#911E42",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  line: {
    width: 500,
    height: 10,
    backgroundColor: "#000",
    position: "absolute",
    zIndex: -1,
  },
  text: {
    color: "#FFF44F",
    fontSize: 22,
  },
});
