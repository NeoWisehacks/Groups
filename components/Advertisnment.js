import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Advertisnment = ({ showIconLeft, showIconRight }) => {
  return (
    <View style={styles.groupChildLayout}>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-5327.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.fashionDayParent}>
          <Text
            style={[styles.fashionDay, styles.offText]}
          >{`#Fashion Day `}</Text>
          <Text style={[styles.off, styles.offText]}>80% Off</Text>
          <Text style={[styles.discoverFashionThat, styles.label1Typo]}>
            Discover fashion that suits your style
          </Text>
        </View>
        <View style={[styles.button, styles.labelFlexBox]}>
          <Image
            style={styles.plusIconLayout}
            contentFit="cover"
            source={require("../assets/plusmini.png")}
          />
          <View style={[styles.label, styles.labelFlexBox]}>
            <Text style={[styles.label1, styles.label1Typo]}>
              Check this out
            </Text>
          </View>
          <Image
            style={[styles.plusMiniIcon1, styles.plusIconLayout]}
            contentFit="cover"
            source={require("../assets/plusmini.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  offText: {
    textAlign: "left",
    textTransform: "uppercase",
    lineHeight: 20,
    left: 0,
    position: "absolute",
  },
  label1Typo: {
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
  },
  labelFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  plusIconLayout: {
    display: "none",
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    height: 200,
    width: 390,
  },
  fashionDay: {
    fontSize: FontSize.body_size,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightForegroundsFgOnInverted,
    top: 0,
  },
  off: {
    top: 24,
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSpringgreen,
  },
  discoverFashionThat: {
    top: 48,
    fontSize: FontSize.smallRegular_size,
    color: Color.colorGainsboro_100,
    left: 0,
    position: "absolute",
  },
  fashionDayParent: {
    width: 212,
    height: 68,
  },
  label1: {
    fontSize: FontSize.textCompactTextCompactSmallPlus_size,
    color: Color.lightForegroundsFgOnInverted,
  },
  label: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: 0,
    marginLeft: 4,
  },
  plusMiniIcon1: {
    marginLeft: 4,
  },
  button: {
    shadowColor: "rgba(3, 7, 18, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0.25,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_8xs,
    marginTop: 8,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  groupParent: {
    top: 32,
    left: 22,
    height: 85,
    position: "absolute",
  },
  groupChildLayout: {
    height: 200,
    width: 390,
  },
});

export default Advertisnment;
