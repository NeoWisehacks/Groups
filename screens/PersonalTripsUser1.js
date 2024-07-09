import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import HeaderWardrobe from "../components/HeaderWardrobe";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const PersonalTripsUser1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalTripsuser}>
      <View style={styles.def}>
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
        <ModeLightTypeDefault
          notch={require("../assets/notch.png")}
          wifi={require("../assets/wifi1.png")}
          recordingIndicator={require("../assets/recording-indicator.png")}
          leftSide={require("../assets/left-side1.png")}
          modeLightTypeDefaultPosition="absolute"
          modeLightTypeDefaultTop={0}
          modeLightTypeDefaultLeft={0}
          modeLightTypeDefaultWidth={375}
          modeLightTypeDefaultBackgroundColor="unset"
        />
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox1]}>
        <View style={[styles.ioncartOutlineParent, styles.parentFrameFlexBox]}>
          <Image
            style={[styles.ioncartOutlineIcon, styles.iconLayout1]}
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
            style={[styles.ioncartOutlineIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/heroiconsoutlinecamera.png")}
          />
          <Image
            style={[styles.microphone2Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/microphone2.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
        <View style={styles.parentFrameFlexBox}>
          <View style={[styles.fwdParent, styles.parentFrameFlexBox]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={[styles.arrowCaretDownMd, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.newTypo]}>BECOME</Text>
            <View style={[styles.insiderParent, styles.parentFrameFlexBox]}>
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
            style={[styles.arrowCaretDownMd, styles.iconLayout]}
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
      <View style={styles.frameView}>
        <HeaderWardrobe previousWardrobe="Trip Name" />
        <View style={[styles.rectangleParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-53323.png")}
          />
          <View style={[styles.memberParent, styles.wrapperSpaceBlock]}>
            <Text style={[styles.member, styles.textTypo]}>Member</Text>
            <Text style={[styles.status, styles.womenTypo]}>status</Text>
          </View>
        </View>
        <View style={[styles.outfitAndPriceParent, styles.parentFlexBox]}>
          <Pressable
            style={styles.outfitLayout}
            onPress={() => navigation.navigate("OutfitPage")}
          >
            <View>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleContainer, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[styles.frameInner, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon1, styles.avatarIcon1Position]}
                  contentFit="cover"
                  source={require("../assets/avatar1.png")}
                />
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameParent2SpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameParent2, styles.frameParent2SpaceBlock]}
              >
                <View
                  style={[
                    styles.interfaceLabelParent,
                    styles.parentFrameFlexBox,
                  ]}
                >
                  <Image
                    style={styles.arrowChevronRight}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={[styles.formal, styles.newClr]}>Formal</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.outfitAndPrice1, styles.outfitLayout]}
            onPress={() => navigation.navigate("OutfitPage")}
          >
            <View>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleContainer, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[styles.frameInner, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon1, styles.avatarIcon1Position]}
                  contentFit="cover"
                  source={require("../assets/avatar1.png")}
                />
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameParent2SpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameParent2, styles.frameParent2SpaceBlock]}
              >
                <View
                  style={[
                    styles.interfaceLabelParent,
                    styles.parentFrameFlexBox,
                  ]}
                >
                  <Image
                    style={styles.arrowChevronRight}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={[styles.formal, styles.newClr]}>Formal</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.outfitAndPrice1, styles.outfitLayout]}
            onPress={() => navigation.navigate("OutfitPage")}
          >
            <View>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleContainer, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[styles.frameInner, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon1, styles.avatarIcon1Position]}
                  contentFit="cover"
                  source={require("../assets/avatar1.png")}
                />
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameParent2SpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameParent2, styles.frameParent2SpaceBlock]}
              >
                <View
                  style={[
                    styles.interfaceLabelParent,
                    styles.parentFrameFlexBox,
                  ]}
                >
                  <Image
                    style={styles.arrowChevronRight}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={[styles.formal, styles.newClr]}>Formal</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[styles.outfitAndPrice1, styles.outfitLayout]}
            onPress={() => navigation.navigate("OutfitPage")}
          >
            <View>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleContainer, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[styles.frameInner, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon1, styles.avatarIcon1Position]}
                  contentFit="cover"
                  source={require("../assets/avatar1.png")}
                />
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameParent2SpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameParent2, styles.frameParent2SpaceBlock]}
              >
                <View
                  style={[
                    styles.interfaceLabelParent,
                    styles.parentFrameFlexBox,
                  ]}
                >
                  <Image
                    style={styles.arrowChevronRight}
                    contentFit="cover"
                    source={require("../assets/interface--label.png")}
                  />
                  <Text style={[styles.formal, styles.newClr]}>Formal</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag21.png")}
      />
      <View style={[styles.newParent, styles.parentFlexBox1]}>
        <Text style={[styles.new, styles.newClr]}>New</Text>
        <Image
          style={[styles.addCircleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/addcircle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  parentFlexBox1: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  parentFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  newTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
  },
  parentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  womenTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    textAlign: "left",
  },
  framePosition: {
    zIndex: 0,
    width: 160,
  },
  avatarIcon1Position: {
    zIndex: 1,
    position: "absolute",
  },
  frameParent2SpaceBlock: {
    marginTop: 4,
    flexDirection: "row",
  },
  newClr: {
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "left",
  },
  outfitLayout: {
    height: 222,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  homeIndicator1: {
    marginLeft: -67,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
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
  ioncartOutlineIcon: {
    overflow: "hidden",
  },
  search: {
    fontFamily: FontFamily.smallRegular,
    color: Color.colorDarkgray_200,
    marginLeft: 10,
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
    flex: 1,
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
  frameParent: {
    top: 103,
    left: 17,
    borderColor: Color.colorDarkgray_200,
    width: 360,
    height: 35,
    borderWidth: 1,
  },
  fwd: {
    fontSize: FontSize.h5_size,
    fontWeight: "900",
    fontFamily: FontFamily.h5Black,
    color: Color.colorBlack,
    textAlign: "left",
  },
  arrowCaretDownMd: {
    overflow: "hidden",
  },
  fwdParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFloralwhite,
    borderColor: Color.colorAntiquewhite,
    width: 90,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  become: {
    fontSize: FontSize.xSMALL_size,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  insider: {
    color: Color.colorBurlywood,
    fontSize: FontSize.xSMALL_size,
    fontWeight: "500",
    textAlign: "left",
  },
  arrowChevronRight: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  insiderParent: {
    justifyContent: "center",
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
    width: 32,
    height: 32,
    borderRadius: Border.br_9980xl,
    marginLeft: 21,
  },
  frameGroup: {
    top: 56,
    left: 7,
    width: 370,
    justifyContent: "space-between",
    position: "absolute",
  },
  frameChild: {
    width: 40,
    height: 40,
    borderRadius: Border.br_81xl,
  },
  member: {
    color: Color.selected,
    width: 140,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    textAlign: "left",
  },
  status: {
    marginTop: 5,
    fontSize: FontSize.size_5xs,
    color: Color.selected,
  },
  memberParent: {
    marginLeft: 4,
    height: 31,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    width: 140,
    justifyContent: "center",
  },
  rectangleParent: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameItem: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    height: 136,
  },
  frameInner: {
    height: 45,
    backgroundColor: Color.lightButtonsButtonInverted,
  },
  avatarIcon1: {
    top: 8,
    left: 128,
    borderRadius: Border.br_9980xl,
    height: 24,
    width: 24,
  },
  rectangleContainer: {
    top: 0,
    left: 0,
  },
  women: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.smallRegular_size,
  },
  womenWrapper: {
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  yellowDressSummer: {
    color: Color.colorGray_100,
    width: 140,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    textAlign: "left",
  },
  yellowDressSummerOutfitWrapper: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    overflow: "hidden",
    height: 31,
    width: 140,
  },
  formal: {
    lineHeight: 8,
    fontFamily: FontFamily.montserratRegular,
    marginLeft: 2,
    fontSize: FontSize.size_5xs,
  },
  interfaceLabelParent: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorIndianred,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
  },
  text: {
    color: Color.colorForestgreen,
    textAlign: "right",
  },
  frameParent2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameParent1: {
    width: 144,
    height: 69,
    paddingBottom: Padding.p_5xs,
    marginTop: 8,
  },
  outfitAndPrice1: {
    marginLeft: 16,
  },
  outfitAndPriceParent: {
    flexWrap: "wrap",
    padding: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameView: {
    top: 150,
    width: 390,
    height: 634,
    left: 0,
    position: "absolute",
  },
  new: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.small,
    fontWeight: "500",
  },
  addCircleIcon: {
    marginLeft: 10,
  },
  newParent: {
    top: 733,
    left: 282,
    backgroundColor: Color.selected,
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1.5,
    height: 38,
  },
  personalTripsuser: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default PersonalTripsUser1;
