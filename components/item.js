import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item = ({ heroiconsOutline, itemPosition, itemMarginLeft }) => {
  const itemStyle = useMemo(() => {
    return {
      ...getStyleValue("position", itemPosition),
      ...getStyleValue("marginLeft", itemMarginLeft),
    };
  }, [itemPosition, itemMarginLeft]);

  return (
    <View style={[styles.item, itemStyle]}>
      <View style={[styles.brandParent, styles.parentFlexBox]}>
        <View style={styles.brandFlexBox}>
          <View style={styles.newLayout}>
            <Image
              style={[styles.newMwssagesChild, styles.newPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-53294.png")}
            />
            <Image
              style={[styles.newMwssagesItem, styles.newPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-23453.png")}
            />
          </View>
          <Text style={[styles.by, styles.bySpaceBlock]}>By</Text>
        </View>
        <Image
          style={styles.heroiconsOutline}
          contentFit="cover"
          source={heroiconsOutline}
        />
      </View>
      <Image
        style={styles.itemChild}
        contentFit="cover"
        source={require("../assets/rectangle-53295.png")}
      />
      <View style={styles.printedYellowKurtaForWomenParent}>
        <Text style={styles.brand1Typo}>printed Yellow Kurta for women</Text>
        <Text style={[styles.brand1, styles.brand1Typo]}>Brand</Text>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.phstarFillParent, styles.brandFlexBox]}>
            <Image
              style={styles.phstarFillIcon}
              contentFit="cover"
              source={require("../assets/icons/star.svg")}
            />
            <View style={[styles.parent, styles.bySpaceBlock]}>
              <Text style={[styles.text, styles.textClr]}>{`4.5 `}</Text>
              <Text style={[styles.text1, styles.textTypo]}>|</Text>
              <Text style={[styles.text2, styles.textTypo]}>1040</Text>
            </View>
          </View>
          <Text style={[styles.text3, styles.textTypo1]}>$69.69</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  newPosition: {
    borderRadius: Border.br_21xl,
    top: 0,
    position: "absolute",
  },
  bySpaceBlock: {
    marginLeft: 4,
    alignItems: "center",
  },
  brand1Typo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textTransform: "capitalize",
    textAlign: "left",
    lineHeight: 8,
    fontSize: FontSize.size_5xs,
  },
  brandFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textClr: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xs,
  },
  textTypo: {
    marginLeft: 1,
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    textAlign: "left",
  },
  textTypo1: {
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
  },
  newMwssagesChild: {
    left: 0,
    height: 12,
    width: 12,
  },
  newMwssagesItem: {
    left: 9,
    width: 3,
    height: 3,
  },
  newLayout: {
    height: 12,
    width: 12,
  },
  by: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_200,
    display: "flex",
    width: 30,
    height: 15,
    textAlign: "left",
    lineHeight: 8,
    fontSize: FontSize.size_5xs,
    marginLeft: 4,
  },
  heroiconsOutline: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  brandParent: {
    paddingLeft: Padding.p_9xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_9xs,
  },
  itemChild: {
    maxWidth: "100%",
    height: 189,
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  brand1: {
    marginTop: 5,
  },
  phstarFillIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
  },
  text1: {
    fontSize: FontSize.size_7xs,
    color: Color.colorGainsboro_300,
    lineHeight: 16,
    marginLeft: 1,
  },
  text2: {
    lineHeight: 10,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_5xs,
  },
  parent: {
    marginLeft: 4,
    flexDirection: "row",
  },
  phstarFillParent: {
    width: 60,
  },
  text3: {
    color: Color.colorForestgreen,
    textTransform: "capitalize",
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
  },
  frameParent: {
    marginTop: 5,
  },
  printedYellowKurtaForWomenParent: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_9xs,
    alignSelf: "stretch",
  },
  item: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: 170,
    height: 253,
  },
});

export default Item;
