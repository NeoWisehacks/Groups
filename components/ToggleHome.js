import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ToggleHome = ({
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Variant2Position),
      ...getStyleValue("top", property1Variant2Top),
      ...getStyleValue("left", property1Variant2Left),
    };
  }, [property1Variant2Position, property1Variant2Top, property1Variant2Left]);

  const navigation = useNavigation();

  return (
    <View style={[styles.property1variant2, property1Variant2Style]}>
      <View style={[styles.homeWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.home}>Home</Text>
      </View>
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
  homeWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
  },
  property1variant2: {
    width: 390,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ToggleHome;
