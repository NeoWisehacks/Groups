import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SearchAndButtons = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
        <View style={styles.parentFrameFlexBox}>
          <View style={[styles.fwdParent, styles.fwdParentLayout]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={styles.arrowCaretDownMd}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.becomeTypo]}>BECOME</Text>
            <View style={styles.frameViewFlexBox}>
              <Text style={[styles.insider, styles.becomeTypo]}>INSIDER</Text>
              <Image
                style={styles.arrowChevronRight}
                contentFit="cover"
                source={require("../assets/arrow--chevron-right.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.parentFrameFlexBox}>
          <Image
            style={styles.arrowCaretDownMd}
            contentFit="cover"
            source={require("../assets/communication--bell.png")}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewFlexBox]}>
        <View style={[styles.ioncartOutlineParent, styles.parentFrameFlexBox]}>
          <Image
            style={[styles.ioncartOutlineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ioncartoutline.png")}
          />
          <Text style={styles.search}>Search</Text>
        </View>
        <View
          style={[
            styles.heroiconsOutlinecameraParent,
            styles.parentFrameFlexBox,
          ]}
        >
          <Image
            style={[styles.ioncartOutlineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/heroiconsoutlinecamera.png")}
          />
          <Image
            style={[styles.microphone2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/microphone2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  fwdParentLayout: {
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
  },
  becomeTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    fontSize: FontSize.xSMALL_size,
    textAlign: "left",
  },
  frameViewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  fwd: {
    fontSize: FontSize.h5_size,
    fontWeight: "900",
    fontFamily: FontFamily.h5Black,
    textAlign: "left",
    color: Color.colorBlack,
  },
  arrowCaretDownMd: {
    height: 24,
    overflow: "hidden",
    width: 24,
  },
  fwdParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorAntiquewhite,
    width: 90,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  become: {
    color: Color.colorBlack,
  },
  insider: {
    color: Color.colorBurlywood,
  },
  arrowChevronRight: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  becomeParent: {
    marginLeft: 40,
  },
  vectorIcon: {
    height: 22,
    marginLeft: 21,
    width: 24,
  },
  avatarIcon: {
    borderRadius: Border.br_9980xl,
    width: 32,
    height: 32,
    marginLeft: 21,
  },
  frameGroup: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  ioncartOutlineIcon: {
    overflow: "hidden",
  },
  search: {
    fontSize: FontSize.smallRegular_size,
    fontFamily: FontFamily.smallRegular,
    color: Color.colorDarkgray_200,
    marginLeft: 10,
    flex: 1,
    textAlign: "left",
  },
  ioncartOutlineParent: {
    flex: 1,
  },
  microphone2Icon: {
    marginLeft: 15,
  },
  heroiconsOutlinecameraParent: {
    marginLeft: 10,
  },
  frameView: {
    borderRadius: Border.br_11xl,
    borderColor: Color.colorDarkgray_200,
    width: 360,
    padding: Padding.p_3xs,
    marginTop: 12,
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameParent: {
    position: "absolute",
    top: 56,
    left: 7,
    width: 370,
    alignItems: "flex-end",
  },
});

export default SearchAndButtons;
