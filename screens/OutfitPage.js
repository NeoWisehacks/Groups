import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import { useNavigation } from "@react-navigation/native";
import ProductOfOutfit from "../components/ProductOfOutfit";
import Navbar from "../components/Navbar";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const OutfitPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.outfitPage, styles.iconLayout]}>
      <View style={styles.def}>
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
        <ModeLightTypeDefault
          notch={require("../assets/notch.png")}
          wifi={require("../assets/wifi.png")}
          recordingIndicator={require("../assets/recording-indicator.png")}
          leftSide={require("../assets/left-side1.png")}
          modeLightTypeDefaultPosition="absolute"
          modeLightTypeDefaultTop={0}
          modeLightTypeDefaultLeft={0}
          modeLightTypeDefaultWidth={375}
          modeLightTypeDefaultBackgroundColor="unset"
        />
      </View>
      <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
        <View style={styles.parentFrameFlexBox}>
          <View style={[styles.fwdParent, styles.parentFrameFlexBox]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={[styles.arrowCaretDownMd, styles.arrowLayout]}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.newTypo]}>BECOME</Text>
            <View style={styles.insiderParentFlexBox}>
              <Text style={[styles.insider, styles.newTypo]}>INSIDER</Text>
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
            style={[styles.arrowCaretDownMd, styles.arrowLayout]}
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
      <View style={styles.outfitPageInner}>
        <View style={styles.frameContainer}>
          <View style={[styles.arrowChevronLeftParent, styles.parentFlexBox]}>
            <Pressable
              style={styles.arrowLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/arrow--chevron-left.png")}
              />
            </Pressable>
            <Text style={styles.outfitName}>Outfit Name</Text>
            <Image
              style={[styles.menuMoreVertical, styles.arrowLayout]}
              contentFit="cover"
              source={require("../assets/menu--more-vertical.png")}
            />
          </View>
          <View style={styles.descriptionParent}>
            <Text style={[styles.description, styles.loremIpsumClr]}>
              Description
            </Text>
            <Text style={[styles.loremIpsum, styles.tagsTypo]}>
              lorem ipsum
            </Text>
          </View>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <View style={styles.wrapper}>
              <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
            </View>
            <View style={[styles.tagsWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.tags, styles.tagsTypo]}>Tags</Text>
            </View>
            <View style={[styles.tagsWrapper, styles.wrapperSpaceBlock]}>
              <Text style={[styles.tags, styles.tagsTypo]}>Tags</Text>
            </View>
            <View
              style={[styles.fiRrCrossSmallWrapper, styles.wrapperSpaceBlock]}
            >
              <Image
                style={styles.fiRrCrossSmallIcon}
                contentFit="cover"
                source={require("../assets/firrcrosssmall1.png")}
              />
            </View>
          </View>
          <View style={[styles.productParent, styles.frameViewFlexBox]}>
            <ProductOfOutfit
              rectangle5329={require("../assets/rectangle-532916.png")}
            />
            <ProductOfOutfit
              rectangle5329={require("../assets/rectangle-532917.png")}
              propMarginLeft={10}
            />
            <ProductOfOutfit
              rectangle5329={require("../assets/rectangle-532918.png")}
              propMarginLeft={10}
            />
            <View
              style={[styles.editAddPlusCircle, styles.insiderParentFlexBox]}
            >
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag21.png")}
      />
      <View style={[styles.newParent, styles.parentFlexBox]}>
        <Text style={[styles.new, styles.newTypo]}>New</Text>
        <Image
          style={[styles.addCircleIcon, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/addcircle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  parentFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrowLayout: {
    height: 24,
    width: 24,
  },
  newTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    textAlign: "left",
  },
  parentFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loremIpsumClr: {
    color: Color.colorDimgray_100,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  tagsTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.smallRegular_size,
    textAlign: "left",
  },
  frameViewFlexBox: {
    flexWrap: "wrap",
    marginTop: 5,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  textTypo: {
    fontSize: FontSize.smallRegular_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  wrapperSpaceBlock: {
    marginLeft: 4,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  insiderParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  def: {
    marginLeft: -188,
    bottom: 7,
    width: 375,
    height: 836,
    left: "50%",
    position: "absolute",
  },
  fwd: {
    fontSize: FontSize.h5_size,
    fontWeight: "900",
    fontFamily: FontFamily.h5Black,
    textAlign: "left",
    color: Color.colorBlack,
  },
  arrowCaretDownMd: {
    overflow: "hidden",
  },
  fwdParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorAntiquewhite,
    borderWidth: 1,
    width: 90,
    height: 35,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    borderStyle: "solid",
  },
  become: {
    fontSize: FontSize.xSMALL_size,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  insider: {
    color: Color.colorBurlywood,
    fontSize: FontSize.xSMALL_size,
    fontWeight: "500",
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
  frameParent: {
    top: 56,
    left: 7,
    width: 370,
    justifyContent: "space-between",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  outfitName: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    marginLeft: 8,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    textAlign: "left",
    flex: 1,
  },
  menuMoreVertical: {
    marginLeft: 8,
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    alignSelf: "stretch",
  },
  description: {
    fontSize: FontSize.smallRegular_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  loremIpsum: {
    marginTop: 7,
    color: Color.colorDimgray_100,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  descriptionParent: {
    marginTop: 5,
    paddingVertical: Padding.p_8xs,
    width: 390,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
  },
  text: {
    color: Color.colorForestgreen,
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  wrapper: {
    backgroundColor: "#ccffe3",
    height: 19,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  tags: {
    lineHeight: 20,
    color: Color.colorFuchsia,
  },
  tagsWrapper: {
    backgroundColor: Color.colorThistle,
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
  },
  frameView: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
  },
  vectorIcon1: {
    width: 18,
    height: 18,
  },
  editAddPlusCircle: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLightgray,
    width: 120,
    height: 157,
    padding: Padding.p_10xs,
    marginLeft: 10,
    overflow: "hidden",
  },
  productParent: {
    padding: Padding.p_8xs,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  outfitPageInner: {
    top: 89,
    left: 0,
    width: 390,
    position: "absolute",
  },
  new: {
    fontSize: FontSize.body_size,
    color: Color.lightForegroundsFgOnInverted,
  },
  addCircleIcon: {
    marginLeft: 10,
  },
  newParent: {
    top: 733,
    left: 282,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.selected,
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1.5,
    height: 38,
    borderStyle: "solid",
    position: "absolute",
  },
  outfitPage: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});

export default OutfitPage;
