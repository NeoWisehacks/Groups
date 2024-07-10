import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Category = ({
  camping,
  categoryWidth=80,
  categoryHeight=60,
  categoryMarginLeft,
}) => {
  const categoryStyle = useMemo(() => {
    return {
      ...getStyleValue("width", categoryWidth),
      ...getStyleValue("height", categoryHeight),
      ...getStyleValue("marginLeft", categoryMarginLeft),
    };
  }, [categoryWidth, categoryHeight, categoryMarginLeft]);

  return (
    <View style={[styles.category, categoryStyle]}>
      <View style={[styles.categoryChild, styles.childPosition]} />
      <Text style={[styles.camping, styles.campingPosition]}>{camping}</Text>
      <View style={styles.mayaIcontraveloutlinetent}>
        <View
          style={[styles.mayaIcontraveloutlinetentChild, styles.childPosition]}
        />
        <Image
          style={[styles.mayaIcontraveloutlinetentItem, styles.campingPosition]}
          contentFit="cover"
          source={require("../assets/vector-28.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  campingPosition: {
    left: "12.5%",
    position: "absolute",
  },
  categoryChild: {
    shadowColor: "rgba(255, 255, 255, 0.1)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightpink,
  },
  camping: {
    top: "60%",
    fontSize: FontSize.xSMALL_size,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "left",
  },
  mayaIcontraveloutlinetentChild: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1,
    display: "none",
  },
  mayaIcontraveloutlinetentItem: {
    height: "58.5%",
    width: "75%",
    top: "21%",
    right: "12.5%",
    bottom: "20.5%",
    borderRadius: Border.br_12xs_5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mayaIcontraveloutlinetent: {
    height: "33.33%",
    width: "25%",
    top: "10%",
    right: "66.25%",
    bottom: "56.67%",
    left: "8.75%",
    position: "absolute",
  },
  category: {
    width: 80,
    height: 60,
  },
});

export default Category;
