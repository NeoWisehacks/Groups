import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ModeLightTypeDefault = ({
  notch,
  wifi,
  recordingIndicator,
  leftSide,
  modeLightTypeDefaultPosition,
  modeLightTypeDefaultTop,
  modeLightTypeDefaultLeft,
  modeLightTypeDefaultWidth,
  modeLightTypeDefaultBackgroundColor,
}) => {
  const modeLightTypeDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", modeLightTypeDefaultPosition),
      ...getStyleValue("top", modeLightTypeDefaultTop),
      ...getStyleValue("left", modeLightTypeDefaultLeft),
      ...getStyleValue("width", modeLightTypeDefaultWidth),
      ...getStyleValue("backgroundColor", modeLightTypeDefaultBackgroundColor),
    };
  }, [
    modeLightTypeDefaultPosition,
    modeLightTypeDefaultTop,
    modeLightTypeDefaultLeft,
    modeLightTypeDefaultWidth,
    modeLightTypeDefaultBackgroundColor,
  ]);

  return (
    <View style={[styles.modelightTypedefault, modeLightTypeDefaultStyle]}>
      <Image style={styles.notchIcon} contentFit="cover" source={notch} />
      <View style={styles.rightSide}>
        <Image
          style={styles.batteryIcon}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image style={styles.wifiIcon} contentFit="cover" source={wifi} />
        <Image
          style={styles.mobileSignalIcon}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <Image
          style={styles.recordingIndicatorIcon}
          contentFit="cover"
          source={recordingIndicator}
        />
      </View>
      <Image style={styles.leftSideIcon} contentFit="cover" source={leftSide} />
    </View>
  );
};

const styles = StyleSheet.create({
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    top: 0,
    right: 0,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  modelightTypedefault: {
    width: 375,
    height: 44,
    overflow: "hidden",
  },
});

export default ModeLightTypeDefault;
