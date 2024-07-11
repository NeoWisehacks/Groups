import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Item from "../components/item";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Collection1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.collection, styles.iconLayout]}>
      <View style={styles.def}>
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
        <View style={[styles.iphoneXOrNewer, styles.batteryIconPosition]}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={[styles.batteryIcon, styles.batteryIconPosition]}
              contentFit="cover"
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal.png")}
            />
            <Image
              style={styles.recordingIndicatorIcon}
              contentFit="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            contentFit="cover"
            source={require("../assets/left-side.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.navigateFlexBox]}>
        <View style={styles.fwdParentFlexBox}>
          <View style={[styles.fwdParent, styles.fwdParentFlexBox]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={[styles.arrowCaretDownMd, styles.arrowLayout]}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.becomeTypo]}>BECOME</Text>
            <View style={[styles.insiderParent, styles.parentFlexBox]}>
              <Text style={[styles.insider, styles.becomeTypo]}>INSIDER</Text>
              <Image
                style={styles.arrowChevronRight}
                contentFit="cover"
                source={require("../assets/arrow--chevron-right.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.fwdParentFlexBox}>
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
      <View style={styles.collectionInner}>
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
            <Text style={[styles.collectionName, styles.moreIdeasTypo]}>
              Collection Name
            </Text>
            <Image
              style={[styles.menuMoreVertical, styles.arrowLayout]}
              contentFit="cover"
              source={require("../assets/menu--more-vertical.png")}
            />
          </View>
          <View style={[styles.moreIdeasWrapper, styles.itemParentSpaceBlock]}>
            <Text style={[styles.moreIdeas, styles.moreIdeasTypo]}>
              More Ideas
            </Text>
          </View>
          <View style={[styles.itemParent, styles.itemParentSpaceBlock]}>
            <Item
              heroiconsOutline={require("../assets/icons/additem.svg")}
              itemPosition="unset"
              itemMarginLeft="unset"
            />
            <Item
              heroiconsOutline={require("../assets/icons/additem.svg")}
              itemPosition="unset"
              itemMarginLeft={10}
            />
            <Item
              heroiconsOutline={require("../assets/icons/additem.svg")}
              itemPosition="unset"
              itemMarginLeft={10}
            />
            <Item
              heroiconsOutline={require("../assets/icons/additem.svg")}
              itemPosition="unset"
              itemMarginLeft={10}
            />
            <Item
              heroiconsOutline={require("../assets/icons/additem.svg")}
              itemPosition="unset"
              itemMarginLeft={10}
            />
            <Item
              heroiconsOutline={require("../assets/icons/additem.svg")}
              itemPosition="unset"
              itemMarginLeft={10}
            />
          </View>
        </View>
      </View>
      <View style={[styles.navigate, styles.navigateFlexBox]}>
        <View style={styles.parentLayout}>
          <Image
            style={styles.image123Icon}
            contentFit="cover"
            source={require("../assets/image-123.png")}
          />
          <Text style={[styles.fwd1, styles.fwd1Typo]}>fwd</Text>
        </View>
        <Pressable
          style={styles.parentLayout}
          onPress={() => navigation.navigate("MinisUp")}
        >
          <Image
            style={styles.arrowLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearvideocircle2.png")}
          />
          <Text style={[styles.fwd1, styles.fwd1Typo]}>Minis</Text>
        </Pressable>
        <Pressable
          style={[
            styles.heroiconsSolidglobeAmericasParent,
            styles.parentLayout,
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.arrowCaretDownMd, styles.arrowLayout]}
            contentFit="cover"
            source={require("../assets/heroiconssolidglobeamericas.png")}
          />
          <Text style={[styles.fwd1, styles.fwd1Typo]}>Groups</Text>
        </Pressable>
        <View style={styles.parentLayout}>
          <Text style={[styles.text, styles.fwd1Typo]}>#</Text>
          <Text style={[styles.fwd1, styles.fwd1Typo]}>Trends</Text>
        </View>
        <View style={styles.parentLayout}>
          <Image
            style={styles.arrowLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearbag21.png")}
          />
          <Text style={[styles.fwd1, styles.fwd1Typo]}>Bag</Text>
        </View>
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
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  navigateFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  fwdParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  arrowLayout: {
    height: 24,
    width: 24,
  },
  becomeTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    fontSize: FontSize.xSMALL_size,
    textAlign: "left",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  moreIdeasTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 16,
    textAlign: "left",
  },
  itemParentSpaceBlock: {
    marginTop: 5,
    justifyContent: "center",
  },
  fwd1Typo: {
    textAlign: "center",
    alignSelf: "stretch",
    fontFamily: FontFamily.small,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  parentLayout: {
    height: 60,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIndicator1: {
    marginLeft: -67,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    height: 44,
    left: 0,
    width: 375,
    overflow: "hidden",
  },
  def: {
    marginLeft: -188,
    bottom: 7,
    height: 836,
    width: 375,
    left: "50%",
    position: "absolute",
  },
  fwd: {
    fontSize: FontSize.h5Black_size,
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
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
    borderStyle: "solid",
  },
  become: {
    color: Color.colorBlack,
    fontFamily: FontFamily.small,
    fontWeight: "500",
  },
  insider: {
    color: Color.colorBurlywood,
  },
  arrowChevronRight: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  insiderParent: {
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
  frameParent: {
    top: 56,
    left: 7,
    width: 370,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  collectionName: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    marginLeft: 8,
    flex: 1,
  },
  menuMoreVertical: {
    marginLeft: 8,
    overflow: "hidden",
  },
  arrowChevronLeftParent: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  moreIdeas: {
    fontSize: FontSize.small_size,
    color: Color.colorDimgray_100,
  },
  moreIdeasWrapper: {
    paddingHorizontal: 20,
    paddingVertical: Padding.p_8xs,
    width: 390,
  },
  itemParent: {
    flexWrap: "wrap",
    padding: Padding.p_8xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  collectionInner: {
    top: 89,
    width: 390,
    left: 0,
    position: "absolute",
  },
  image123Icon: {
    width: 25,
    height: 21,
  },
  fwd1: {
    marginTop: 3,
    height: 12,
    fontSize: FontSize.xSMALL_size,
    textAlign: "center",
  },
  heroiconsSolidglobeAmericasParent: {
    borderColor: Color.colorCrimson,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  text: {
    fontSize: FontSize.h4_size,
    display: "flex",
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  navigate: {
    top: 784,
    width: 390,
    left: 0,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  collection: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default Collection1;
