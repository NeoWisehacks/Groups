import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Product = ({ rectangle5329, productPosition, productMarginLeft }) => {
  const productStyle = useMemo(() => {
    return {
      ...getStyleValue("position", productPosition),
      ...getStyleValue("marginLeft", productMarginLeft),
    };
  }, [productPosition, productMarginLeft]);

  return (
    <View style={[styles.product, productStyle]}>
      <View style={[styles.brandParent, styles.brandParentFlexBox]}>
        <View style={styles.brand}>
          <View style={styles.newLayout}>
            <Image
              style={[styles.newMwssagesChild, styles.newPosition]}
              contentFit="cover"
              source={require("../assets/rectangle-532915.png")}
            />
            <Image
              style={[styles.newMwssagesItem, styles.newPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-23452.png")}
            />
          </View>
          <Text style={[styles.brand1, styles.baseTypo]}>brand</Text>
        </View>
        <View style={styles.interfaceLabelParent}>
          <Image
            style={[styles.interfaceLabel, styles.newLayout]}
            contentFit="cover"
            source={require("../assets/interface--label2.png")}
          />
          <Text style={[styles.base, styles.baseTypo]}>base</Text>
        </View>
      </View>
      <Image
        style={styles.productChild}
        contentFit="cover"
        source={rectangle5329}
      />
      <View
        style={[
          styles.printedYellowKurtaForWomenWrapper,
          styles.brandParentFlexBox,
        ]}
      >
        <Text style={[styles.printedYellowKurta, styles.baseTypo]}>
          printed Yellow Kurta for women
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brandParentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  newPosition: {
    borderRadius: Border.br_21xl,
    top: 0,
    position: "absolute",
  },
  baseTypo: {
    textAlign: "left",
    lineHeight: 8,
    fontSize: FontSize.size_5xs,
  },
  newLayout: {
    height: 12,
    width: 12,
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
  brand1: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_200,
    display: "flex",
    width: 30,
    height: 15,
    marginLeft: 4,
    alignItems: "center",
  },
  brand: {
    alignItems: "center",
    flexDirection: "row",
  },
  interfaceLabel: {
    overflow: "hidden",
  },
  base: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.lightForegroundsFgOnInverted,
    marginLeft: 2,
  },
  interfaceLabelParent: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorIndianred,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
    flexDirection: "row",
  },
  brandParent: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_9xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  productChild: {
    height: 112,
    width: 120,
  },
  printedYellowKurta: {
    flex: 1,
    textTransform: "capitalize",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorGray_100,
  },
  printedYellowKurtaForWomenWrapper: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  product: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    justifyContent: "center",
    width: 120,
  },
});

export default Product;
