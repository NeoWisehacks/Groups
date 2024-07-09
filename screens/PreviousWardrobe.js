import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import HeaderWardrobe from "../components/HeaderWardrobe";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const PreviousWardrobe = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.previousWardrobe}>
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
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.ioncartOutlineParent, styles.parentFlexBox1]}>
          <Image
            style={[styles.ioncartOutlineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ioncartoutline.png")}
          />
          <Text style={styles.search}>Search</Text>
        </View>
        <View
          style={[styles.heroiconsOutlinecameraParent, styles.parentFlexBox1]}
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
      <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
        <View style={styles.parentFlexBox1}>
          <View style={[styles.fwdParent, styles.parentFlexBox1]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={[styles.arrowCaretDownMd, styles.addCircleIconLayout]}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.newTypo]}>BECOME</Text>
            <View style={[styles.insiderParent, styles.parentFlexBox1]}>
              <Text style={[styles.insider, styles.newTypo]}>INSIDER</Text>
              <Image
                style={styles.arrowChevronRight}
                contentFit="cover"
                source={require("../assets/arrow--chevron-right.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.parentFlexBox1}>
          <Image
            style={[styles.arrowCaretDownMd, styles.addCircleIconLayout]}
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
        <HeaderWardrobe previousWardrobe="Previous wardrobe" />
        <View style={[styles.tripsParent, styles.parentSpaceBlock]}>
          <Pressable
            style={styles.trips}
            onPress={() => navigation.navigate("PersonalTripsUser")}
          >
            <View style={[styles.tripNameWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
            </View>
            <Image
              style={styles.tripsChild}
              contentFit="cover"
              source={require("../assets/rectangle-532920.png")}
            />
            <View style={[styles.forParent, styles.parentSpaceBlock]}>
              <Text style={[styles.for, styles.forTypo]}>For</Text>
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.trips}
            onPress={() => navigation.navigate("PersonalTripsUser")}
          >
            <View style={[styles.tripNameWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
            </View>
            <Image
              style={styles.tripsChild}
              contentFit="cover"
              source={require("../assets/rectangle-532921.png")}
            />
            <View style={[styles.forParent, styles.parentSpaceBlock]}>
              <Text style={[styles.for, styles.forTypo]}>For</Text>
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.trips}
            onPress={() => navigation.navigate("PersonalTripsUser")}
          >
            <View style={[styles.tripNameWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
            </View>
            <Image
              style={styles.tripsChild}
              contentFit="cover"
              source={require("../assets/rectangle-532920.png")}
            />
            <View style={[styles.forParent, styles.parentSpaceBlock]}>
              <Text style={[styles.for, styles.forTypo]}>For</Text>
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={styles.trips}
            onPress={() => navigation.navigate("PersonalTripsUser")}
          >
            <View style={[styles.tripNameWrapper, styles.parentSpaceBlock]}>
              <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
            </View>
            <Image
              style={styles.tripsChild}
              contentFit="cover"
              source={require("../assets/rectangle-532920.png")}
            />
            <View style={[styles.forParent, styles.parentSpaceBlock]}>
              <Text style={[styles.for, styles.forTypo]}>For</Text>
              <Text style={[styles.description, styles.forTypo]}>
                Description
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag22.png")}
      />
      <View style={[styles.newParent, styles.parentFlexBox]}>
        <Text style={[styles.new, styles.newTypo]}>New</Text>
        <Image
          style={[styles.addCircleIcon, styles.addCircleIconLayout]}
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
  parentFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  frameGroupFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  addCircleIconLayout: {
    height: 24,
    width: 24,
  },
  newTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    textAlign: "left",
  },
  parentSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  forClr: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
  },
  forTypo: {
    height: 6,
    fontFamily: FontFamily.interRegular,
    textTransform: "capitalize",
    lineHeight: 8,
    alignSelf: "stretch",
    textAlign: "left",
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
  ioncartOutlineIcon: {
    overflow: "hidden",
  },
  search: {
    fontSize: FontSize.smallRegular_size,
    fontFamily: FontFamily.smallRegular,
    color: Color.colorDarkgray_200,
    marginLeft: 10,
    textAlign: "left",
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
    borderRadius: Border.br_9980xl,
    width: 32,
    height: 32,
    marginLeft: 21,
  },
  frameGroup: {
    top: 56,
    left: 7,
    width: 370,
    position: "absolute",
  },
  tripName: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textTransform: "capitalize",
    lineHeight: 8,
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    flex: 1,
  },
  tripNameWrapper: {
    paddingHorizontal: Padding.p_9xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tripsChild: {
    height: 100,
    marginTop: 3,
    width: 100,
  },
  for: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
    height: 6,
    fontFamily: FontFamily.interRegular,
  },
  description: {
    fontSize: FontSize.size_7xs,
    color: Color.colorDarkgray_100,
    marginTop: 3,
  },
  forParent: {
    paddingHorizontal: Padding.p_8xs,
    marginTop: 3,
    justifyContent: "center",
  },
  trips: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    width: 100,
    justifyContent: "center",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  tripsParent: {
    height: 289,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_base,
    marginTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameView: {
    top: 150,
    left: 0,
    width: 390,
    height: 634,
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
    backgroundColor: Color.selected,
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1.5,
    height: 38,
  },
  previousWardrobe: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default PreviousWardrobe;
