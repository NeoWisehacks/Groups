import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import HeaderWardrobe from "../components/HeaderWardrobe";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const ChatOutfit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatOutfit}>
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
      <View style={styles.frameParent}>
        <HeaderWardrobe previousWardrobe="Chat Outfits" />
        <View style={[styles.outfitAndPriceParent, styles.womenWrapperFlexBox]}>
          <Pressable
            style={[styles.outfitAndPrice, styles.outfitLayout]}
            onPress={() => navigation.navigate("OutfitPage")}
          >
            <View>
              <Image
                style={[styles.frameChild, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-53281.png")}
              />
              <View style={[styles.rectangleGroup, styles.avatarIconPosition]}>
                <LinearGradient
                  style={[styles.frameItem, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon, styles.avatarIconPosition]}
                  contentFit="cover"
                  source={require("../assets/avatar2.png")}
                />
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.women}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameContainerSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.interfaceLabelParent}>
                  <Image
                    style={styles.interfaceLabel}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.formal}>Formal</Text>
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
                style={[styles.frameChild, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-53281.png")}
              />
              <View style={[styles.rectangleGroup, styles.avatarIconPosition]}>
                <LinearGradient
                  style={[styles.frameItem, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon, styles.avatarIconPosition]}
                  contentFit="cover"
                  source={require("../assets/avatar2.png")}
                />
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.women}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameContainerSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.interfaceLabelParent}>
                  <Image
                    style={styles.interfaceLabel}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.formal}>Formal</Text>
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
                style={[styles.frameChild, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-53281.png")}
              />
              <View style={[styles.rectangleGroup, styles.avatarIconPosition]}>
                <LinearGradient
                  style={[styles.frameItem, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon, styles.avatarIconPosition]}
                  contentFit="cover"
                  source={require("../assets/avatar2.png")}
                />
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.women}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameContainerSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.interfaceLabelParent}>
                  <Image
                    style={styles.interfaceLabel}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.formal}>Formal</Text>
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
                style={[styles.frameChild, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-53281.png")}
              />
              <View style={[styles.rectangleGroup, styles.avatarIconPosition]}>
                <LinearGradient
                  style={[styles.frameItem, styles.framePosition]}
                  locations={[0, 1]}
                  colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                />
                <Image
                  style={[styles.avatarIcon, styles.avatarIconPosition]}
                  contentFit="cover"
                  source={require("../assets/avatar2.png")}
                />
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View style={[styles.womenWrapper, styles.wrapperSpaceBlock]}>
                <Text style={styles.women}>Women</Text>
              </View>
              <View
                style={[
                  styles.yellowDressSummerOutfitWrapper,
                  styles.frameContainerSpaceBlock,
                ]}
              >
                <Text
                  style={[styles.yellowDressSummer, styles.textTypo]}
                >{`yellow dress summer outfit
`}</Text>
              </View>
              <View
                style={[styles.frameContainer, styles.frameContainerSpaceBlock]}
              >
                <View style={styles.interfaceLabelParent}>
                  <Image
                    style={styles.interfaceLabel}
                    contentFit="cover"
                    source={require("../assets/interface--label1.png")}
                  />
                  <Text style={styles.formal}>Formal</Text>
                </View>
                <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.addCircleIcon}
        contentFit="cover"
        source={require("../assets/addcircle1.png")}
      />
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
  womenWrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  outfitLayout: {
    height: 222,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  framePosition: {
    zIndex: 0,
    width: 160,
  },
  avatarIconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  frameContainerSpaceBlock: {
    marginTop: 4,
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
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
  frameChild: {
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    height: 136,
  },
  frameItem: {
    height: 45,
    backgroundColor: Color.lightButtonsButtonInverted,
  },
  avatarIcon: {
    top: 8,
    left: 128,
    borderRadius: Border.br_9980xl,
    width: 24,
    height: 24,
  },
  rectangleGroup: {
    top: 0,
    left: 0,
  },
  women: {
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray_200,
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  womenWrapper: {
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  yellowDressSummer: {
    color: Color.colorGray_100,
    width: 140,
    textAlign: "left",
  },
  yellowDressSummerOutfitWrapper: {
    height: 31,
    width: 140,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    overflow: "hidden",
  },
  interfaceLabel: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  formal: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    fontFamily: FontFamily.montserratRegular,
    color: Color.lightForegroundsFgOnInverted,
    marginLeft: 2,
    textAlign: "left",
  },
  interfaceLabelParent: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorIndianred,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: Color.colorForestgreen,
    textAlign: "right",
  },
  frameContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    width: 144,
    height: 69,
    paddingBottom: Padding.p_5xs,
    marginTop: 8,
  },
  outfitAndPrice: {
    alignItems: "center",
  },
  outfitAndPrice1: {
    marginLeft: 9,
    alignItems: "center",
  },
  outfitAndPriceParent: {
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 45,
    width: 390,
    height: 774,
    left: 0,
    position: "absolute",
  },
  addCircleIcon: {
    top: 779,
    left: 328,
    width: 40,
    height: 40,
    position: "absolute",
  },
  chatOutfit: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default ChatOutfit;
