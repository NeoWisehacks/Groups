import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import OpinionPoll from "../components/OpinionPoll";
import Outfit from "../components/Outfit";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import FrameComponent from "../components/FrameComponent";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={[styles.group, styles.groupLayout]}>
      <View style={styles.chat}>
        <View style={styles.newMwssagesParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/new-mwssages2.png")}
          />
          <View style={styles.user1Parent}>
            <Text style={[styles.user1, styles.user1FlexBox]}>user 1</Text>
            <View style={[styles.productWithDetails, styles.opinionLayout]}>
              <View
                style={[styles.newMwssagesGroup, styles.frameParentSpaceBlock]}
              >
                <View style={styles.newLayout}>
                  <Image
                    style={[styles.newMwssagesChild, styles.newPosition]}
                    contentFit="cover"
                    source={require("../assets/rectangle-532913.png")}
                  />
                  <Image
                    style={[styles.newMwssagesItem, styles.newPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-23451.png")}
                  />
                </View>
                <Text style={[styles.brandName, styles.brandNameTypo]}>
                  Brand Name
                </Text>
              </View>
              <Image
                style={[styles.productWithDetailsChild, styles.groupLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-53282.png")}
              />
              <View style={styles.printedYellowKurtaForWomenParent}>
                <Text style={[styles.printedYellowKurta, styles.brandNameTypo]}>
                  printed Yellow Kurta for women
                </Text>
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo1]}>$69.69</Text>
                  <View style={styles.phstarFillParent}>
                    <Image
                      style={styles.phstarFillIcon}
                      contentFit="cover"
                      source={require("../assets/phstarfill.png")}
                    />
                    <View style={styles.container}>
                      <Text style={styles.text1}>{`4.5 `}</Text>
                      <Text style={[styles.text2, styles.textTypo]}>|</Text>
                      <Text style={[styles.text3, styles.textTypo]}>1040</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <OpinionPoll />
            <Outfit
              rectangle5329={require("../assets/rectangle-532916.png")}
              rectangle53291={require("../assets/rectangle-532917.png")}
              rectangle53292={require("../assets/rectangle-532918.png")}
              outfitPosition="unset"
              outfitMarginTop={1}
            />
            <View style={[styles.opinionWrapper, styles.opinionLayout]}>
              <Text style={styles.opinion}>Opinion</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
          <View style={[styles.opinionContainer, styles.opinionLayout]}>
            <Text style={styles.opinion}>Opinion</Text>
          </View>
          <View style={[styles.opinionWrapper, styles.opinionLayout]}>
            <Text style={styles.opinion}>Opinion</Text>
          </View>
          <View style={[styles.opinionWrapper, styles.opinionLayout]}>
            <Text style={styles.opinion}>Opinion</Text>
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <ModeLightTypeDefault
        notch={require("../assets/notch.png")}
        wifi={require("../assets/wifi2.png")}
        recordingIndicator={require("../assets/recording-indicator.png")}
        leftSide={require("../assets/left-side2.png")}
        modeLightTypeDefaultPosition="absolute"
        modeLightTypeDefaultTop={1}
        modeLightTypeDefaultLeft={0}
        modeLightTypeDefaultWidth={390}
        modeLightTypeDefaultBackgroundColor="#fff"
      />
      <FrameComponent />
      <View style={styles.instanceParent}>
        <View style={styles.editPaperclipAttechmentTiWrapper}>
          <Image
            style={[
              styles.editPaperclipAttechmentTi,
              styles.microphone2IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/edit--paperclip-attechment-tilt.png")}
          />
        </View>
        <View style={styles.editPaperclipAttechmentTi1}>
          <Text style={[styles.typeSomething, styles.textTypo2]}>
            Type Something
          </Text>
          <View style={styles.fiRrCameraParent}>
            <Image
              style={[styles.fiRrCameraIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/firrcamera.png")}
            />
            <Image
              style={[styles.microphone2Icon, styles.microphone2IconLayout]}
              contentFit="cover"
              source={require("../assets/microphone21.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: "100%",
    overflow: "hidden",
  },
  user1FlexBox: {
    textAlign: "left",
    color: Color.colorDimgray_100,
  },
  opinionLayout: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  frameParentSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_8xs,
    alignSelf: "stretch",
  },
  newPosition: {
    borderRadius: Border.br_21xl,
    top: 0,
    position: "absolute",
  },
  brandNameTypo: {
    color: Color.colorGray_100,
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
    textAlign: "left",
  },
  textTypo1: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    marginLeft: 1,
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  microphone2IconLayout: {
    height: 24,
    width: 24,
  },
  textTypo2: {
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  user1: {
    fontSize: FontSize.size_5xs,
    lineHeight: 20,
    display: "flex",
    width: 49,
    height: 7,
    alignItems: "center",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    color: Color.colorDimgray_100,
  },
  newMwssagesChild: {
    height: 25,
    width: 25,
    left: 0,
  },
  newMwssagesItem: {
    left: 19,
    width: 6,
    height: 6,
  },
  newLayout: {
    height: 25,
    width: 25,
  },
  brandName: {
    width: 140,
    marginLeft: 8,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  newMwssagesGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  productWithDetailsChild: {
    maxWidth: "100%",
    height: 196,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  printedYellowKurta: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 200,
  },
  text: {
    color: Color.colorForestgreen,
    textAlign: "right",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  phstarFillIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  text1: {
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    fontWeight: "500",
    fontSize: FontSize.xSMALL_size,
    lineHeight: 16,
    textAlign: "left",
    color: Color.colorDimgray_100,
  },
  text2: {
    fontSize: FontSize.size_7xs,
    color: Color.colorGainsboro_300,
  },
  text3: {
    fontSize: FontSize.xSMALL_size,
    marginLeft: 1,
    color: Color.colorDimgray_100,
  },
  container: {
    marginLeft: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  phstarFillParent: {
    marginLeft: 79,
    alignItems: "center",
    flexDirection: "row",
  },
  parent: {
    marginTop: 5,
    flexDirection: "row",
  },
  printedYellowKurtaForWomenParent: {
    padding: Padding.p_8xs,
    alignSelf: "stretch",
  },
  productWithDetails: {
    marginTop: 1,
    alignItems: "center",
  },
  opinion: {
    lineHeight: 12,
    color: Color.colorDimgray_200,
    fontSize: FontSize.smallRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  opinionWrapper: {
    padding: Padding.p_8xs,
    marginTop: 1,
    flexDirection: "row",
  },
  user1Parent: {
    width: 329,
    marginLeft: 6,
  },
  newMwssagesParent: {
    paddingLeft: Padding.p_8xs,
    paddingBottom: Padding.p_8xs,
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  opinionContainer: {
    padding: Padding.p_8xs,
    flexDirection: "row",
  },
  frameParent: {
    justifyContent: "flex-end",
    marginTop: 1,
    alignItems: "flex-end",
  },
  chat: {
    top: 110,
    width: 390,
    height: 660,
    left: 0,
    position: "absolute",
  },
  homeIndicator1: {
    bottom: 0,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
  },
  homeIndicator: {
    bottom: 7,
  },
  editPaperclipAttechmentTi: {
    overflow: "hidden",
  },
  editPaperclipAttechmentTiWrapper: {
    backgroundColor: "#f1f1f1",
    padding: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    justifyContent: "flex-end",
  },
  typeSomething: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorDimgray_100,
    flex: 1,
  },
  fiRrCameraIcon: {
    overflow: "hidden",
  },
  microphone2Icon: {
    marginLeft: 15,
  },
  fiRrCameraParent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  editPaperclipAttechmentTi1: {
    borderRadius: Border.br_11xl,
    backgroundColor: "#f0f0f0",
    width: 310,
    paddingHorizontal: 12,
    paddingVertical: Padding.p_3xs,
    marginLeft: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  instanceParent: {
    top: 780,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  group: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: "100%",
  },
});

export default Group;
