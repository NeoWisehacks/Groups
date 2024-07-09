import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ToggleWardrobe = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
  ]);

  const navigation = useNavigation();

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <View style={[styles.wardrobeWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.home}>Wardrobe</Text>
      </View>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("Communities")}
      >
        <Text style={styles.home}>Communities</Text>
      </Pressable>
      <Pressable
        style={styles.wrapperFlexBox}
        onPress={() => navigation.navigate("GroupsList")}
      >
        <Text style={styles.home}>Group</Text>
      </Pressable>
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
  wardrobeWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
  },
  property1default: {
    width: 390,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ToggleWardrobe;
