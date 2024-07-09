import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import HeaderWardrobe from "../components/HeaderWardrobe";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const GroupTrip = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupTrip}>
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
      <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
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
        <View style={[styles.frameContainer, styles.parentFrameFlexBox]}>
          <View style={[styles.fwdParent, styles.parentSpaceBlock]}>
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
        <View style={[styles.frameContainer, styles.parentFrameFlexBox]}>
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
        <View style={[styles.descriptionParent, styles.parentSpaceBlock]}>
          <Text style={[styles.description, styles.loremIpsumClr]}>
            Description
          </Text>
          <Text style={[styles.loremIpsum, styles.womenTypo]}>lorem ipsum</Text>
        </View>
        <View style={[styles.descriptionParent, styles.parentSpaceBlock]}>
          <Text style={[styles.description, styles.loremIpsumClr]}>
            Group Name
          </Text>
          <Text style={[styles.loremIpsum, styles.womenTypo]}>Members</Text>
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <Pressable
              onPress={() => navigation.navigate("PersonalTripsUser1")}
            >
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-5332.png")}
              />
              <Text style={[styles.userName, styles.outfitsTypo]}>
                User Name
              </Text>
            </Pressable>
            <Pressable
              style={styles.rectangleGroup}
              onPress={() => navigation.navigate("PersonalTripsUser1")}
            >
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53321.png")}
              />
              <Text style={[styles.userName, styles.outfitsTypo]}>
                User Name
              </Text>
            </Pressable>
            <Pressable
              style={styles.rectangleGroup}
              onPress={() => navigation.navigate("PersonalTripsUser1")}
            >
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53322.png")}
              />
              <Text style={[styles.userName, styles.outfitsTypo]}>
                User Name
              </Text>
            </Pressable>
            <Pressable
              style={styles.rectangleGroup}
              onPress={() => navigation.navigate("PersonalTripsUser1")}
            >
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-53322.png")}
              />
              <Text style={[styles.userName, styles.outfitsTypo]}>
                User Name
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.outfitsParent, styles.frameParentFlexBox]}>
          <Text style={styles.outfitsTypo}>Outfits</Text>
          <Text style={[styles.seeMore, styles.textTypo]}>See More</Text>
        </View>
        <View style={[styles.outfitAndPriceParent, styles.frameParentFlexBox]}>
          <Pressable
            style={styles.outfitLayout}
            onPress={() => navigation.navigate("OutfitPage")}
          >
            <View>
              <Image
                style={[styles.frameChild1, styles.frameChild1Position]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleParent2, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.frameChild1Position,
                  ]}
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
            <View style={styles.frameParent2}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.wrapperSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.descriptionTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
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
                style={[styles.frameChild1, styles.frameChild1Position]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleParent2, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.frameChild1Position,
                  ]}
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
            <View style={styles.frameParent2}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.wrapperSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.descriptionTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
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
                style={[styles.frameChild1, styles.frameChild1Position]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleParent2, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.frameChild1Position,
                  ]}
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
            <View style={styles.frameParent2}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.wrapperSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.descriptionTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
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
                style={[styles.frameChild1, styles.frameChild1Position]}
                contentFit="cover"
                source={require("../assets/rectangle-5328.png")}
              />
              <View
                style={[styles.rectangleParent2, styles.avatarIcon1Position]}
              >
                <LinearGradient
                  style={[
                    styles.rectangleLineargradient,
                    styles.frameChild1Position,
                  ]}
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
            <View style={styles.frameParent2}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={[styles.women, styles.womenTypo]}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.wrapperSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.descriptionTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
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
      <View style={[styles.newParent, styles.parentFrameFlexBox]}>
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
  parentFrameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  parentSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    borderStyle: "solid",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  newTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
  },
  loremIpsumClr: {
    color: Color.colorDimgray_100,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  womenTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  frameParentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  outfitsTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "left",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameChild1Position: {
    zIndex: 0,
    width: 160,
  },
  avatarIcon1Position: {
    zIndex: 1,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    overflow: "hidden",
  },
  descriptionTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
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
    alignItems: "center",
    flex: 1,
  },
  microphone2Icon: {
    marginLeft: 15,
  },
  heroiconsOutlinecameraParent: {
    marginLeft: 10,
    alignItems: "center",
  },
  frameParent: {
    top: 103,
    left: 17,
    borderColor: Color.colorDarkgray_200,
    width: 360,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    borderWidth: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
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
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    height: 35,
    borderWidth: 1,
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
    alignItems: "center",
  },
  becomeParent: {
    marginLeft: 40,
  },
  frameContainer: {
    alignItems: "center",
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
    alignItems: "center",
    position: "absolute",
  },
  description: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  loremIpsum: {
    marginTop: 7,
    color: Color.colorDimgray_100,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  descriptionParent: {
    borderColor: Color.colorDimgray_100,
    borderTopWidth: 0.1,
    borderBottomWidth: 0.5,
    paddingVertical: Padding.p_mini,
    width: 390,
    justifyContent: "center",
  },
  frameChild: {
    width: 80,
    height: 80,
    borderRadius: Border.br_81xl,
  },
  userName: {
    marginTop: 4,
  },
  rectangleGroup: {
    marginLeft: 20,
  },
  frameParent1: {
    marginTop: 7,
    padding: Padding.p_3xs,
  },
  seeMore: {
    color: Color.colorIndianred,
    fontSize: FontSize.body_size,
    lineHeight: 20,
  },
  outfitsParent: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    justifyContent: "space-between",
  },
  frameChild1: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    height: 136,
  },
  rectangleLineargradient: {
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
  rectangleParent2: {
    top: 0,
    left: 0,
  },
  women: {
    color: Color.colorDimgray_200,
    lineHeight: 20,
  },
  womenWrapper: {
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  yellowDressSummer: {
    color: Color.colorGray_100,
    width: 140,
    textTransform: "capitalize",
    lineHeight: 16,
  },
  yellowDressSummerOutfitWrapper: {
    height: 31,
    width: 140,
    marginTop: 4,
  },
  formal: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    fontFamily: FontFamily.montserratRegular,
    marginLeft: 2,
  },
  interfaceLabelParent: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorIndianred,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
  },
  text: {
    color: Color.colorForestgreen,
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  frameParent3: {
    marginTop: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameParent2: {
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
    alignItems: "center",
  },
  frameView: {
    top: 150,
    height: 634,
    width: 390,
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
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  groupTrip: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default GroupTrip;
