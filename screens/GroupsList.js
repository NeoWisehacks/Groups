import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import ToggleComm from "../components/ToggleComm";
import GroupRow from "../components/GroupRow";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { Padding, FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const GroupsList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupsList}>
      <View style={styles.def}>
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
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
      <ToggleComm
        property1Variant4Position="absolute"
        property1Variant4Top={150}
        property1Variant4Left={0}
        property1Variant4Width={390}
      />
      <ScrollView style={styles.list}>
        <GroupRow
          rectangle5329={require("../assets/rectangle-5329.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53291.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53291.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53291.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
        <GroupRow
          rectangle5329={require("../assets/rectangle-53292.png")}
          groupName="Group Name"
        />
      </ScrollView>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag2.png")}
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
    alignItems: "center",
    flexDirection: "row",
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
  newTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    textAlign: "left",
  },
  messagesClr: {
    color: Color.selected,
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
    justifyContent: "center",
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    padding: Padding.p_3xs,
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
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    height: 35,
    borderWidth: 1,
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
    justifyContent: "space-between",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_21xl,
    width: 45,
    height: 45,
  },
  groupName: {
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 140,
    fontSize: FontSize.smallRegular_size,
  },
  messages: {
    fontSize: FontSize.size_5xs,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    marginTop: 5,
  },
  groupNameParent: {
    height: 31,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    marginLeft: 20,
    width: 140,
    justifyContent: "center",
    overflow: "hidden",
  },
  rectangleParent: {
    alignSelf: "stretch",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
  },
  list: {
    top: 184,
    left: 0,
    width: 390,
    height: 600,
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
    justifyContent: "center",
    borderStyle: "solid",
    padding: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  groupsList: {
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default GroupsList;
