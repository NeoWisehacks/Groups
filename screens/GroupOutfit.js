import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import { useNavigation } from "@react-navigation/native";
import Trips from "../components/Trips";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import ToggleGroup from "../components/ToggleGroup";

const GroupOutfit = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupOutfit, styles.iconLayout]}>
      <ModeLightTypeDefault
        notch={require("../assets/notch.png")}
        wifi={require("../assets/wifi1.png")}
        recordingIndicator={require("../assets/recording-indicator.png")}
        leftSide={require("../assets/left-side1.png")}
        modeLightTypeDefaultPosition="absolute"
        modeLightTypeDefaultTop={1}
        modeLightTypeDefaultLeft={0}
        modeLightTypeDefaultWidth={390}
        modeLightTypeDefaultBackgroundColor="#fff"
      />
      <View style={styles.frameParent}>
        <View style={styles.arrowChevronLeftParent}>
          <Pressable
            style={styles.avatarIconLayout}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/arrow--chevron-left.png")}
            />
          </Pressable>
          <View style={styles.newMwssagesParent}>
            <Image
              style={styles.tripsChildLayout}
              contentFit="cover"
              source={require("../assets/new-mwssages1.png")}
            />
            <View style={[styles.groupNameWrapper, styles.wrapperFlexBox]}>
              <Text style={[styles.groupName, styles.groupNameTypo]}>
                Group Name
              </Text>
            </View>
          </View>
          <Image
            style={[styles.menuMoreVertical, styles.avatarIconLayout]}
            contentFit="cover"
            source={require("../assets/menu--more-vertical.png")}
          />
        </View>
        <View style={styles.descriptionParent}>
          <Text style={[styles.groupName, styles.groupNameTypo]}>
            Description
          </Text>
          <Text style={[styles.loremIpsum, styles.womenTypo]}>lorem ipsum</Text>
        </View>
        <View>
        <ToggleGroup/>
          
          <View style={styles.frameGroup}>
            <View style={styles.frameSpaceBlock}>
              <View
                style={[styles.tripsOutfitsParent, styles.parentSpaceBlock]}
              >
                <Text style={[styles.tripsOutfits, styles.membersTypo]}>
                  Trips Outfits
                </Text>
                <Pressable onPress={() => navigation.navigate("GroupTrip")}>
                  <Text style={[styles.seeMore1, styles.textTypo]}>
                    See More
                  </Text>
                </Pressable>
              </View>
              <View style={[styles.tripsParent, styles.parentSpaceBlock]}>
                <Trips />
                <Pressable
                  style={[styles.trips, styles.tripsSpaceBlock]}
                  onPress={() => navigation.navigate("GroupTrip")}
                >
                  <View
                    style={[
                      styles.tripNameWrapper,
                      styles.tripNameWrapperSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.tripName, styles.formalTypo]}>
                      Trip Name
                    </Text>
                  </View>
                  <Image
                    style={[styles.tripsChild, styles.tripsChildLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-532923.png")}
                  />
                  <View style={[styles.forParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.for, styles.forTypo]}>For</Text>
                    <Text style={[styles.description1, styles.forTypo]}>
                      Description
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.trips, styles.tripsSpaceBlock]}
                  onPress={() => navigation.navigate("GroupTrip")}
                >
                  <View
                    style={[
                      styles.tripNameWrapper,
                      styles.tripNameWrapperSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.tripName, styles.formalTypo]}>
                      Trip Name
                    </Text>
                  </View>
                  <Image
                    style={[styles.tripsChild, styles.tripsChildLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-532924.png")}
                  />
                  <View style={[styles.forParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.for, styles.forTypo]}>For</Text>
                    <Text style={[styles.description1, styles.forTypo]}>
                      Description
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.trips, styles.tripsSpaceBlock]}
                  onPress={() => navigation.navigate("GroupTrip")}
                >
                  <View
                    style={[
                      styles.tripNameWrapper,
                      styles.tripNameWrapperSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.tripName, styles.formalTypo]}>
                      Trip Name
                    </Text>
                  </View>
                  <Image
                    style={[styles.tripsChild, styles.tripsChildLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-53299.png")}
                  />
                  <View style={[styles.forParent, styles.parentSpaceBlock]}>
                    <Text style={[styles.for, styles.forTypo]}>For</Text>
                    <Text style={[styles.description1, styles.forTypo]}>
                      Description
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameSpaceBlock]}>
              <View
                style={[styles.tripsOutfitsParent, styles.parentSpaceBlock]}
              >
                <Text style={[styles.tripsOutfits, styles.membersTypo]}>
                  Chat Outfits
                </Text>
                <Pressable onPress={() => navigation.navigate("ChatOutfit")}>
                  <Text style={[styles.seeMore1, styles.textTypo]}>
                    See More
                  </Text>
                </Pressable>
              </View>
              <View
                style={[styles.outfitAndPriceParent, styles.tripsSpaceBlock]}
              >
                <Pressable
                  style={styles.outfitLayout}
                  onPress={() => navigation.navigate("OutfitPage")}
                >
                  <View>
                    <Image
                      style={[styles.frameChild, styles.framePosition]}
                      contentFit="cover"
                      source={require("../assets/rectangle-5328.png")}
                    />
                    <View
                      style={[styles.rectangleGroup, styles.avatarIconPosition]}
                    >
                      <LinearGradient
                        style={[styles.frameItem, styles.framePosition]}
                        locations={[0, 1]}
                        colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                      />
                      <Image
                        style={[styles.avatarIcon, styles.avatarIconPosition]}
                        contentFit="cover"
                        source={require("../assets/avatar1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent1}>
                    <View
                      style={[styles.womenWrapper, styles.wrapperSpaceBlock]}
                    >
                      <Text style={[styles.women, styles.womenTypo]}>
                        Women
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.yellowDressSummerOutfitWrapper,
                        styles.wrapperSpaceBlock,
                      ]}
                    >
                      <Text
                        style={[styles.yellowDressSummer, styles.groupNameTypo]}
                      >{`yellow dress summer outfit
`}</Text>
                    </View>
                    <View style={[styles.frameParent2, styles.parentFlexBox]}>
                      <View
                        style={[
                          styles.interfaceLabelParent,
                          styles.tripNameWrapperSpaceBlock,
                        ]}
                      >
                        <Image
                          style={styles.interfaceLabel}
                          contentFit="cover"
                          source={require("../assets/interface--label.png")}
                        />
                        <Text style={[styles.formal, styles.formalTypo]}>
                          Formal
                        </Text>
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
                      source={require("../assets/rectangle-5328.png")}
                    />
                    <View
                      style={[styles.rectangleGroup, styles.avatarIconPosition]}
                    >
                      <LinearGradient
                        style={[styles.frameItem, styles.framePosition]}
                        locations={[0, 1]}
                        colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                      />
                      <Image
                        style={[styles.avatarIcon, styles.avatarIconPosition]}
                        contentFit="cover"
                        source={require("../assets/avatar1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent1}>
                    <View
                      style={[styles.womenWrapper, styles.wrapperSpaceBlock]}
                    >
                      <Text style={[styles.women, styles.womenTypo]}>
                        Women
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.yellowDressSummerOutfitWrapper,
                        styles.wrapperSpaceBlock,
                      ]}
                    >
                      <Text
                        style={[styles.yellowDressSummer, styles.groupNameTypo]}
                      >{`yellow dress summer outfit
`}</Text>
                    </View>
                    <View style={[styles.frameParent2, styles.parentFlexBox]}>
                      <View
                        style={[
                          styles.interfaceLabelParent,
                          styles.tripNameWrapperSpaceBlock,
                        ]}
                      >
                        <Image
                          style={styles.interfaceLabel}
                          contentFit="cover"
                          source={require("../assets/interface--label.png")}
                        />
                        <Text style={[styles.formal, styles.formalTypo]}>
                          Formal
                        </Text>
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
                      source={require("../assets/rectangle-5328.png")}
                    />
                    <View
                      style={[styles.rectangleGroup, styles.avatarIconPosition]}
                    >
                      <LinearGradient
                        style={[styles.frameItem, styles.framePosition]}
                        locations={[0, 1]}
                        colors={["rgba(0, 0, 0, 0.24)", "rgba(0, 0, 0, 0)"]}
                      />
                      <Image
                        style={[styles.avatarIcon, styles.avatarIconPosition]}
                        contentFit="cover"
                        source={require("../assets/avatar1.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.frameParent1}>
                    <View
                      style={[styles.womenWrapper, styles.wrapperSpaceBlock]}
                    >
                      <Text style={[styles.women, styles.womenTypo]}>
                        Women
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.yellowDressSummerOutfitWrapper,
                        styles.wrapperSpaceBlock,
                      ]}
                    >
                      <Text
                        style={[styles.yellowDressSummer, styles.groupNameTypo]}
                      >{`yellow dress summer outfit
`}</Text>
                    </View>
                    <View style={[styles.frameParent2, styles.parentFlexBox]}>
                      <View
                        style={[
                          styles.interfaceLabelParent,
                          styles.tripNameWrapperSpaceBlock,
                        ]}
                      >
                        <Image
                          style={styles.interfaceLabel}
                          contentFit="cover"
                          source={require("../assets/interface--label.png")}
                        />
                        <Text style={[styles.formal, styles.formalTypo]}>
                          Formal
                        </Text>
                      </View>
                      <Text style={[styles.text, styles.textTypo]}>$69.69</Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  groupNameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  avatarIconLayout: {
    height: 24,
    width: 24,
  },
  womenTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.smallRegular_size,
  },
  membersTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  parentSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  tripsSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
  },
  tripNameWrapperSpaceBlock: {
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
  },
  formalTypo: {
    lineHeight: 8,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  tripsChildLayout: {
    height: 100,
    width: 100,
  },
  forTypo: {
    height: 6,
    lineHeight: 8,
    alignSelf: "stretch",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    textTransform: "capitalize",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    alignSelf: "stretch",
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
    flexDirection: "row",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  outfitLayout: {
    height: 222,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  homePosition: {
    height: 5,
    width: 134,
    left: "50%",
    marginLeft: -67,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  groupName: {
    color: Color.colorDimgray_100,
  },
  groupNameWrapper: {
    marginTop: 3,
  },
  newMwssagesParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuMoreVertical: {
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    padding: Padding.p_mini,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 390,
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
    borderBottomWidth: 0.1,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_mini,
    borderStyle: "solid",
    justifyContent: "center",
    width: 390,
  },
  members: {
    fontFamily: FontFamily.small,
    color: Color.colorBlack,
    fontSize: FontSize.smallRegular_size,
  },
  membersWrapper: {
    flex: 1,
  },
  outfitsWrapper: {
    borderColor: Color.colorCrimson,
    borderBottomWidth: 2,
    borderStyle: "solid",
    flex: 1,
  },
  toggleGroup: {
    borderColor: Color.colorDarkgray_200,
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 390,
  },
  tripsOutfits: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    color: Color.colorGray_200,
    lineHeight: 20,
  },
  seeMore1: {
    fontSize: FontSize.body_size,
    color: Color.colorIndianred,
    lineHeight: 20,
  },
  tripsOutfitsParent: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tripName: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 8,
    textTransform: "capitalize",
    flex: 1,
  },
  tripNameWrapper: {
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  tripsChild: {
    marginTop: 3,
  },
  for: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
    height: 6,
  },
  description1: {
    fontSize: FontSize.size_7xs,
    color: Color.colorDarkgray_100,
    marginTop: 3,
  },
  forParent: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    marginTop: 3,
    justifyContent: "center",
  },
  trips: {
    marginLeft: 8,
    borderRadius: Border.br_8xs,
    paddingVertical: Padding.p_8xs,
    width: 100,
    justifyContent: "center",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  tripsParent: {
    marginTop: 8,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: 0,
    flexDirection: "row",
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
    height: 24,
    width: 24,
  },
  rectangleGroup: {
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
    width: 140,
    color: Color.colorGray_100,
  },
  yellowDressSummerOutfitWrapper: {
    height: 31,
    width: 140,
    marginTop: 4,
  },
  interfaceLabel: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  formal: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.lightForegroundsFgOnInverted,
    marginLeft: 2,
  },
  interfaceLabelParent: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorIndianred,
    paddingVertical: Padding.p_12xs,
    alignItems: "center",
  },
  text: {
    color: Color.colorForestgreen,
    textTransform: "capitalize",
    lineHeight: 16,
    fontSize: FontSize.smallRegular_size,
  },
  frameParent2: {
    marginTop: 4,
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
    marginLeft: 9,
  },
  outfitAndPriceParent: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameView: {
    marginTop: 4,
  },
  frameGroup: {
    padding: Padding.p_8xs,
    width: 390,
  },
  frameParent: {
    top: 56,
    height: 763,
    left: 0,
    position: "absolute",
  },
  homeIndicator1: {
    bottom: 0,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    bottom: 7,
  },
  groupOutfit: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: "100%",
  },
});

export default GroupOutfit;
