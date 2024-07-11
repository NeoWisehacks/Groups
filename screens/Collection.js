import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Item from "../components/item";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const Collection = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.collection, styles.iconLayout]}>
      <View style={styles.def}>
        <View style={[styles.homeIndicator, styles.homePosition]}>
          <View style={[styles.homeIndicator1, styles.homePosition]} />
        </View>
        <View style={styles.iphoneXOrNewer}>
          <Image
            style={styles.notchIcon}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
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
        <View style={[styles.frameGroup, styles.parentFlexBox1]}>
          <View style={[styles.fwdParent, styles.parentFlexBox1]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={[styles.arrowCaretDownMd, styles.arrowLayout]}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.becomeTypo]}>BECOME</Text>
            <View style={[styles.insiderParent, styles.parentFlexBox1]}>
              <Text style={[styles.insider, styles.becomeTypo]}>INSIDER</Text>
              <Image
                style={styles.arrowChevronRight}
                contentFit="cover"
                source={require("../assets/arrow--chevron-right.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.parentFlexBox1]}>
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
      <View style={[styles.collectionInner, styles.navigatePosition]}>
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
            <Text style={styles.collectionName}>Collection Name</Text>
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
            <View style={styles.tagsWrapper}>
              <Text style={[styles.tags, styles.tagsTypo]}>Tags</Text>
            </View>
            <View
              style={[styles.tagsContainer, styles.tagsContainerSpaceBlock]}
            >
              <Text style={[styles.tags, styles.tagsTypo]}>Tags</Text>
            </View>
            <View
              style={[
                styles.fiRrCrossSmallWrapper,
                styles.tagsContainerSpaceBlock,
              ]}
            >
              <Image
                style={styles.fiRrCrossSmallIcon}
                contentFit="cover"
                source={require("../assets/firrcrosssmall1.png")}
              />
            </View>
          </View>
          <View style={[styles.itemParent, styles.frameViewFlexBox]}>
          <Item itemPosition="unset" itemMarginLeft="unset" 
              heroiconsOutline={require("../assets/icons/cross.svg")}/>
          <Item itemPosition="unset" itemMarginLeft="unset" 
          heroiconsOutline={require("../assets/icons/cross.svg")} />
          <Item itemPosition="unset" itemMarginLeft="unset" 
            heroiconsOutline={require("../assets/icons/cross.svg")}
          />
            
          </View>
        </View>
      </View>
      <View style={[styles.navigate, styles.navigatePosition]}>
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
      <Pressable
        style={[styles.exploreSimilarParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Collection1")}
      >
        <Text style={[styles.exploreSimilar, styles.becomeTypo]}>
          Explore Similar
        </Text>
        <Image
          style={[styles.addCircleIcon, styles.arrowLayout]}
          contentFit="cover"
          source={require("../assets/addcircle.png")}
        />
      </Pressable>
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
  navigateFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowLayout: {
    height: 24,
    width: 24,
  },
  becomeTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    textAlign: "left",
  },
  navigatePosition: {
    width: 390,
    left: 0,
    position: "absolute",
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
    fontSize: FontSize.small_size,
    textAlign: "left",
  },
  frameViewFlexBox: {
    flexWrap: "wrap",
    marginTop: 5,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  tagsContainerSpaceBlock: {
    marginLeft: 4,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
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
    top: 0,
    position: "absolute",
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
    top: 0,
    width: 375,
    position: "absolute",
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
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    borderStyle: "solid",
    alignItems: "center",
  },
  become: {
    fontSize: FontSize.xSMALL_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.small,
    fontWeight: "500",
  },
  insider: {
    color: Color.colorBurlywood,
    fontSize: FontSize.xSMALL_size,
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
  frameGroup: {
    alignItems: "center",
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
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  collectionName: {
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
    fontSize: FontSize.small_size,
    color: Color.colorDimgray_100,
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
  tags: {
    lineHeight: 20,
    color: Color.colorFuchsia,
  },
  tagsWrapper: {
    backgroundColor: Color.colorThistle,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  tagsContainer: {
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
  itemParent: {
    padding: Padding.p_8xs,
    justifyContent: "center",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  collectionInner: {
    top: 89,
  },
  image123Icon: {
    width: 25,
    height: 21,
  },
  fwd1: {
    marginTop: 3,
    height: 12,
    fontSize: FontSize.xSMALL_size,
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.lightForegroundsFgOnInverted,
    width: 390,
  },
  exploreSimilar: {
    fontSize: FontSize.body_size,
    color: Color.lightForegroundsFgOnInverted,
  },
  addCircleIcon: {
    marginLeft: 10,
  },
  exploreSimilarParent: {
    top: 733,
    left: 214,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.selected,
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1.5,
    height: 38,
    borderStyle: "solid",
    position: "absolute",
  },
  collection: {
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default Collection;
