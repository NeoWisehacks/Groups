import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";

const LeftSwipFeature = () => {
  const [leftSwipFeatureSwitchValueState, setLeftSwipFeatureSwitchValueState] =
    useState(false);

  return (
    <Switch
      style={styles.leftSwipFeature}
      value={leftSwipFeatureSwitchValueState}
      onValueChange={setLeftSwipFeatureSwitchValueState}
    />
  );
};

const styles = StyleSheet.create({
  leftSwipFeature: {
    width: 390,
    height: 844,
    overflow: "hidden",
  },
});

export default LeftSwipFeature;
