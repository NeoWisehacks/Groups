import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import Toggle from "../components/Toggle";
import GroupRow from "../components/GroupRow";
import Navbar from "../components/Navbar";
import CommunityPreview from "../components/CommunityPreview";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Communities = () => {
  return (
    <View style={styles.communities}>
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
      <View style={[styles.frameParent, styles.parentFlexBox]}>
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
      <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
        <View style={styles.parentFrameFlexBox}>
          <View style={[styles.fwdParent, styles.parentFrameFlexBox]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={[styles.arrowCaretDownMd, styles.addCircleIconLayout]}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.joinTypo]}>BECOME</Text>
            <View style={styles.insiderParent}>
              <Text style={[styles.insider, styles.joinTypo]}>INSIDER</Text>
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
      <Toggle />
      <View style={[styles.list, styles.listPosition]}>
        <GroupRow
          rectangle5329={require("../assets/rectangle-5329.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Community"
        />
      </View>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag2.png")}
      />
      <View style={[styles.joinParent, styles.parentFlexBox]}>
        <Text style={[styles.join, styles.joinTypo]}>Join</Text>
        <Image
          style={[styles.addCircleIcon, styles.addCircleIconLayout]}
          contentFit="cover"
          source={require("../assets/addcircle.png")}
        />
      </View>
      <View style={[styles.frameView, styles.listPosition]}>
        <CommunityPreview propMarginLeft="unset" />
        <CommunityPreview propMarginLeft={16} />
        <CommunityPreview propMarginLeft={16} />
        <CommunityPreview propMarginLeft={16} />
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
  parentFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  addCircleIconLayout: {
    height: 24,
    width: 24,
  },
  joinTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    textAlign: "left",
  },
  listPosition: {
    width: 390,
    left: 0,
    position: "absolute",
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
    flexDirection: "row",
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
    alignItems: "center",
    flexDirection: "row",
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
    justifyContent: "space-between",
    position: "absolute",
    flexDirection: "row",
  },
  list: {
    top: 322,
    height: 462,
  },
  join: {
    fontSize: FontSize.body_size,
    color: Color.lightForegroundsFgOnInverted,
  },
  addCircleIcon: {
    marginLeft: 10,
  },
  joinParent: {
    top: 733,
    left: 282,
    backgroundColor: Color.selected,
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1.5,
    height: 38,
  },
  frameView: {
    top: 196,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  communities: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Communities;
