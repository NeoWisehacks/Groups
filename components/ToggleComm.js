import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ToggleComm = ({
  property1Variant4Position,
  property1Variant4Top,
  property1Variant4Left,
  property1Variant4Width,
}) => {
  const property1Variant4Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Variant4Position),
      ...getStyleValue("top", property1Variant4Top),
      ...getStyleValue("left", property1Variant4Left),
      ...getStyleValue("width", property1Variant4Width),
    };
  }, [
    property1Variant4Position,
    property1Variant4Top,
    property1Variant4Left,
    property1Variant4Width,
  ]);

  const navigation = useNavigation();

  return (
    <View style={[styles.property1variant4, property1Variant4Style]}>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Home1")}
      >
        <Text style={styles.home}>Wardrobe</Text>
      </Pressable>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Communities")}
      >
        <Text style={styles.home}>Communities</Text>
      </Pressable>
      <View style={[styles.groupWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.home}>Group</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  home: {
    fontSize: FontSize.smallRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.small,
    color: Color.colorBlack,
    textAlign: "left",
  },
  groupWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
  },
  property1variant4: {
    width: 390,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ToggleComm;
