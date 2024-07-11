import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const Swip = () => {
  return (
    <View style={styles.swip}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <Image
          style={[styles.property1defaultChild, styles.frameParentPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-5330.png")}
        />
        <LinearGradient
          style={[styles.frameParent, styles.frameParentPosition]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]}
        >
          <View style={styles.parent}>
            <Text style={styles.text}>$69.69</Text>
            <Text style={styles.greenShorts}>Green Shorts</Text>
            <Text style={[styles.brandName, styles.text1Typo]}>Brand Name</Text>
            <Text style={[styles.brandName, styles.text1Typo]}>
              Description lorem ipsum..........................
            </Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.heroiconsParentFlexBox}>
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/heroiconsminihandthumbup1.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>4</Text>
            </View>
            <View
              style={[
                styles.heroiconsMinihandThumbDownParent,
                styles.heroiconsParentFlexBox,
              ]}
            >
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/heroiconsminihandthumbdown1.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>{`2 `}</Text>
            </View>
            <View
              style={[
                styles.heroiconsMinihandThumbDownParent,
                styles.heroiconsParentFlexBox,
              ]}
            >
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/communication--paper-plane.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>{`2 `}</Text>
            </View>
            <View
              style={[
                styles.heroiconsMinihandThumbDownParent,
                styles.heroiconsParentFlexBox,
              ]}
            >
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/heroiconsoutlineellipsisvertical.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>{`2 `}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Image
          style={[styles.property1defaultChild, styles.frameParentPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-532925.png")}
        />
        <LinearGradient
          style={[styles.frameParent, styles.frameParentPosition]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.4)"]}
        >
          <View style={styles.parent}>
            <Text style={styles.text}>$69.69</Text>
            <Text style={styles.greenShorts}>Green Shorts</Text>
            <Text style={[styles.brandName, styles.text1Typo]}>Brand Name</Text>
            <Text style={[styles.brandName, styles.text1Typo]}>
              Description lorem ipsum..........................
            </Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.heroiconsParentFlexBox}>
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/heroiconsminihandthumbup1.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>4</Text>
            </View>
            <View
              style={[
                styles.heroiconsMinihandThumbDownParent,
                styles.heroiconsParentFlexBox,
              ]}
            >
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/heroiconsminihandthumbdown1.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>{`2 `}</Text>
            </View>
            <View
              style={[
                styles.heroiconsMinihandThumbDownParent,
                styles.heroiconsParentFlexBox,
              ]}
            >
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/communication--paper-plane.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>{`2 `}</Text>
            </View>
            <View
              style={[
                styles.heroiconsMinihandThumbDownParent,
                styles.heroiconsParentFlexBox,
              ]}
            >
              <Image
                style={styles.heroiconsMinihandThumbUp}
                contentFit="cover"
                source={require("../assets/heroiconsoutlineellipsisvertical.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>{`2 `}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    width: 350,
    borderRadius: Border.br_xl,
    left: 20,
    position: "absolute",
    height: 500,
  },
  frameParentPosition: {
    left: 0,
    width: 350,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  text1Typo: {
    lineHeight: 16,
    fontSize: FontSize.small_size,
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "left",
  },
  heroiconsParentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  property1defaultChild: {
    top: 0,
    height: 500,
  },
  text: {
    color: Color.colorMintcream,
    textAlign: "left",
    fontFamily: FontFamily.body,
    fontWeight: "500",
    fontSize: FontSize.h5Black_size,
    alignSelf: "stretch",
  },
  greenShorts: {
    marginTop: 5,
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "left",
    fontFamily: FontFamily.body,
    fontWeight: "500",
    fontSize: FontSize.h5Black_size,
    alignSelf: "stretch",
  },
  brandName: {
    textTransform: "capitalize",
    fontFamily: FontFamily.interRegular,
    marginTop: 5,
    alignSelf: "stretch",
    fontSize: FontSize.small_size,
  },
  parent: {
    width: 306,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
  },
  heroiconsMinihandThumbUp: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text1: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    marginTop: 2,
  },
  heroiconsMinihandThumbDownParent: {
    marginTop: 5,
  },
  frameGroup: {
    paddingHorizontal: 0,
    marginLeft: 5,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
  },
  frameParent: {
    top: 276,
    height: 224,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.lightButtonsButtonInverted,
    justifyContent: "center",
  },
  property1default: {
    top: 20,
    height: 500,
  },
  property1variant2: {
    top: 540,
    height: 500,
  },
  swip: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 390,
    height: 1060,
    overflow: "hidden",
  },
});

export default Swip;
