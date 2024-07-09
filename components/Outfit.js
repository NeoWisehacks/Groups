import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, Padding, Border, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Outfit = ({
  rectangle5329,
  rectangle53291,
  rectangle53292,
  outfitPosition,
  outfitMarginTop,
}) => {
  const outfitStyle = useMemo(() => {
    return {
      ...getStyleValue("position", outfitPosition),
      ...getStyleValue("marginTop", outfitMarginTop),
    };
  }, [outfitPosition, outfitMarginTop]);

  return (
    <View style={[styles.outfit, outfitStyle]}>
      <View style={[styles.outfitParent, styles.parentLayout]}>
        <Text style={styles.outfit1}>Outfit</Text>
        <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
        <Image
          style={styles.menuMoreVertical}
          contentFit="cover"
          source={require("../assets/menu--more-vertical.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={[styles.tagsWrapper, styles.tagsWrapperFlexBox]}>
          <Text style={[styles.tags, styles.textTypo]}>Tags</Text>
        </View>
        <View style={[styles.tagsContainer, styles.tagsWrapperFlexBox]}>
          <Text style={[styles.tags, styles.textTypo]}>Tags</Text>
        </View>
        <View style={[styles.fiRrCrossSmallWrapper, styles.tagsWrapperFlexBox]}>
          <Image
            style={styles.fiRrCrossSmallIcon}
            contentFit="cover"
            source={require("../assets/firrcrosssmall.png")}
          />
        </View>
      </View>
      <View style={styles.product}>
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
      <View style={styles.product}>
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
          source={rectangle53291}
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
      <View style={styles.product}>
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
          source={rectangle53292}
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
      <View style={styles.editAddPlusCircle}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 250,
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.smallRegular_size,
    textAlign: "left",
  },
  tagsWrapperFlexBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
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
    lineHeight: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  newLayout: {
    height: 12,
    width: 12,
  },
  outfit1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    textTransform: "capitalize",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
  },
  text: {
    color: Color.colorForestgreen,
    marginLeft: 4,
    flex: 1,
    textTransform: "capitalize",
    fontFamily: FontFamily.interSemiBold,
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
    fontWeight: "600",
  },
  menuMoreVertical: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 4,
  },
  outfitParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  tags: {
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorFuchsia,
  },
  tagsWrapper: {
    backgroundColor: Color.colorThistle,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_9xs,
  },
  tagsContainer: {
    backgroundColor: Color.colorThistle,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_9xs,
    marginLeft: 4,
  },
  fiRrCrossSmallIcon: {
    width: 11,
    height: 11,
    overflow: "hidden",
  },
  fiRrCrossSmallWrapper: {
    backgroundColor: Color.colorPink,
    width: 39,
    height: 19,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderRadius: Border.br_9xs,
    marginLeft: 4,
  },
  frameParent: {
    marginLeft: 10,
    flexWrap: "wrap",
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
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDimgray_200,
    display: "flex",
    width: 30,
    height: 15,
    marginLeft: 4,
    fontWeight: "600",
    fontSize: FontSize.size_5xs,
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
  },
  productChild: {
    height: 112,
    width: 120,
  },
  printedYellowKurta: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    flex: 1,
    textTransform: "capitalize",
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
  },
  printedYellowKurtaForWomenWrapper: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_9xs,
    justifyContent: "center",
  },
  product: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: 120,
    marginLeft: 10,
    justifyContent: "center",
    borderRadius: Border.br_8xs,
  },
  vectorIcon: {
    width: 18,
    height: 18,
  },
  editAddPlusCircle: {
    backgroundColor: Color.colorLightgray,
    height: 157,
    padding: Padding.p_10xs,
    width: 120,
    marginLeft: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
  },
  outfit: {
    backgroundColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 0.1,
    width: 270,
    padding: Padding.p_3xs,
    minHeight: 200,
    flexWrap: "wrap",
    flexDirection: "row",
    borderRadius: Border.br_8xs,
  },
});

export default Outfit;
