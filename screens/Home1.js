import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import ToggleWardrobe from "../components/ToggleWardrobe";
import Advertisnment from "../components/Advertisnment";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Home1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
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
        <View style={styles.ioncartOutlineParent}>
          <Image
            style={[styles.ioncartOutlineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ioncartoutline.png")}
          />
          <Text style={styles.search}>Search</Text>
        </View>
        <View style={styles.heroiconsOutlinecameraParent}>
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
      <View style={[styles.frameGroup, styles.parentFlexBox]}>
        <View style={styles.frameContainer}>
          <View style={[styles.fwdParent, styles.parentLayout]}>
            <Text style={styles.fwd}>fwd</Text>
            <Image
              style={styles.arrowCaretDownMd}
              contentFit="cover"
              source={require("../assets/arrow--caret-down-md.png")}
            />
          </View>
          <View style={styles.becomeParent}>
            <Text style={[styles.become, styles.becomeTypo]}>BECOME</Text>
            <View style={styles.insiderParent}>
              <Text style={[styles.insider, styles.becomeTypo]}>INSIDER</Text>
              <Image
                style={styles.arrowChevronRight}
                contentFit="cover"
                source={require("../assets/arrow--chevron-right.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <Image
            style={styles.arrowCaretDownMd}
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
      <ToggleWardrobe
        property1DefaultPosition="absolute"
        property1DefaultTop={150}
        property1DefaultLeft={0}
        property1DefaultWidth={390}
      />
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/rectangle-532910.png")}
      />
      <View style={styles.groupParent}>
        <Advertisnment showIconLeft={false} showIconRight={false} />
        <View style={styles.instanceParent}>
          <View style={styles.frameView}>
            <View style={[styles.categoriesParent, styles.parentFlexBox]}>
              <Text style={styles.categories}>Categories</Text>
              <Text style={styles.seeTypo}>See More</Text>
            </View>
            <View style={[styles.categoryParent, styles.parentFlexBox]}>
              <View style={styles.category}>
                <View
                  style={[styles.categoryChild, styles.categoryChildShadowBox]}
                />
                <Text style={[styles.camping, styles.xploreClr]}>camping</Text>
                <View style={styles.mayaIcontraveloutlinetent}>
                  <View
                    style={[
                      styles.mayaIcontraveloutlinetentChild,
                      styles.image123ParentBorder,
                    ]}
                  />
                  <Image
                    style={[
                      styles.mayaIcontraveloutlinetentItem,
                      styles.campingPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vector-28.png")}
                  />
                </View>
              </View>
              <View style={styles.category}>
                <View
                  style={[styles.categoryItem, styles.categoryChildShadowBox]}
                />
                <Text style={[styles.camping, styles.xploreClr]}>Business</Text>
                <View style={styles.mayaIcontraveloutlinetent}>
                  <View
                    style={[
                      styles.mayaIcontraveloutlinetentChild,
                      styles.image123ParentBorder,
                    ]}
                  />
                  <Image
                    style={[
                      styles.mayaIcontraveloutlinetentItem,
                      styles.campingPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vector-28.png")}
                  />
                </View>
              </View>
              <View style={styles.category}>
                <View
                  style={[styles.categoryInner, styles.categoryChildShadowBox]}
                />
                <Text style={[styles.camping, styles.xploreClr]}>solo</Text>
                <View style={styles.mayaIcontraveloutlinetent}>
                  <View
                    style={[
                      styles.mayaIcontraveloutlinetentChild,
                      styles.image123ParentBorder,
                    ]}
                  />
                  <Image
                    style={[
                      styles.mayaIcontraveloutlinetentItem,
                      styles.campingPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vector-28.png")}
                  />
                </View>
              </View>
              <View style={styles.category}>
                <View
                  style={[styles.categoryChild1, styles.categoryChildShadowBox]}
                />
                <Text style={[styles.camping, styles.xploreClr]}>Leisure</Text>
                <View style={styles.mayaIcontraveloutlinetent}>
                  <View
                    style={[
                      styles.mayaIcontraveloutlinetentChild,
                      styles.image123ParentBorder,
                    ]}
                  />
                  <Image
                    style={[
                      styles.mayaIcontraveloutlinetentItem,
                      styles.campingPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vector-28.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View
              style={[
                styles.collaborativeWardrobesParent,
                styles.parentFlexBox,
              ]}
            >
              <Text style={styles.categories}>Collaborative Wardrobes</Text>
              <Pressable onPress={() => navigation.navigate("ChatOutfit1")}>
                <Text style={styles.seeTypo}>See More</Text>
              </Pressable>
            </View>
            <View style={styles.tripsParent}>
              <View style={styles.tripsSpaceBlock}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-532911.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>Group Name</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
              <View style={[styles.trips1, styles.tripsSpaceBlock]}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-532912.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>Group Name</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
              <View style={[styles.trips1, styles.tripsSpaceBlock]}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53299.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>For</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
              <View style={[styles.trips1, styles.tripsSpaceBlock]}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53299.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>For</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent2}>
            <View
              style={[
                styles.collaborativeWardrobesParent,
                styles.parentFlexBox,
              ]}
            >
              <Text style={styles.categories}>Previous Wardrobes</Text>
              <Pressable
                onPress={() => navigation.navigate("PreviousWardrobe")}
              >
                <Text style={styles.seeTypo}>See More</Text>
              </Pressable>
            </View>
            <View style={styles.tripsParent}>
              <View style={styles.tripsSpaceBlock}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-532911.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>Group Name</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
              <View style={[styles.trips1, styles.tripsSpaceBlock]}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-532912.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>Group Name</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
              <View style={[styles.trips1, styles.tripsSpaceBlock]}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53299.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>For</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
              <View style={[styles.trips1, styles.tripsSpaceBlock]}>
                <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                  <Text style={[styles.tripName, styles.forClr]}>
                    Trip Name
                  </Text>
                </View>
                <Image
                  style={styles.tripsChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-53299.png")}
                />
                <View style={[styles.forParent, styles.forParentFlexBox]}>
                  <Text style={[styles.for, styles.forTypo]}>For</Text>
                  <Text style={[styles.description, styles.forTypo]}>
                    Description
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag21.png")}
      />
      <View style={[styles.image123Parent, styles.image123ParentBorder]}>
        <Image
          style={styles.image123Icon}
          contentFit="cover"
          source={require("../assets/image-123.png")}
        />
        <Text style={[styles.xplore, styles.xploreClr]}>XPLORE</Text>
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
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  parentLayout: {
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
  },
  becomeTypo: {
    fontFamily: FontFamily.small,
    fontWeight: "500",
    fontSize: FontSize.xSMALL_size,
    textAlign: "left",
  },
  categoryChildShadowBox: {
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 9,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(255, 255, 255, 0.1)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  xploreClr: {
    color: Color.lightForegroundsFgOnInverted,
    textAlign: "left",
  },
  image123ParentBorder: {
    borderColor: Color.lightForegroundsFgOnInverted,
    borderStyle: "solid",
    position: "absolute",
  },
  campingPosition: {
    left: "12.5%",
    position: "absolute",
  },
  forParentFlexBox: {
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "center",
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
  tripsSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    borderRadius: Border.br_8xs,
    width: 100,
    justifyContent: "center",
    backgroundColor: Color.lightForegroundsFgOnInverted,
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
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  microphone2Icon: {
    marginLeft: 15,
  },
  heroiconsOutlinecameraParent: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 103,
    left: 17,
    borderColor: Color.colorDarkgray_200,
    width: 360,
    height: 35,
    borderWidth: 1,
    borderStyle: "solid",
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
    height: 24,
    width: 24,
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
    alignItems: "center",
    flexDirection: "row",
  },
  become: {
    color: Color.colorBlack,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  becomeParent: {
    marginLeft: 40,
  },
  frameContainer: {
    alignItems: "center",
    flexDirection: "row",
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
    alignItems: "center",
    position: "absolute",
  },
  homeChild: {
    top: 560,
    left: 83,
    width: 112,
    height: 25,
    position: "absolute",
  },
  categories: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.textCompactTextCompactSmallPlus,
    color: Color.colorGray_200,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "left",
  },
  seeTypo: {
    textAlign: "right",
    color: Color.colorIndianred,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.body_size,
    lineHeight: 20,
  },
  categoriesParent: {
    alignSelf: "stretch",
  },
  categoryChild: {
    backgroundColor: Color.colorLightpink,
  },
  camping: {
    top: "60%",
    left: "12.5%",
    position: "absolute",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.lightForegroundsFgOnInverted,
    fontSize: FontSize.xSMALL_size,
  },
  mayaIcontraveloutlinetentChild: {
    borderRadius: Border.br_9xs,
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderColor: Color.lightForegroundsFgOnInverted,
    borderWidth: 1,
    width: "100%",
  },
  mayaIcontraveloutlinetentItem: {
    height: "58.5%",
    width: "75%",
    top: "21%",
    right: "12.5%",
    bottom: "20.5%",
    borderRadius: Border.br_12xs_5,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  mayaIcontraveloutlinetent: {
    height: "33.33%",
    width: "25%",
    top: "10%",
    right: "66.25%",
    bottom: "56.67%",
    left: "8.75%",
    position: "absolute",
  },
  category: {
    width: 80,
    height: 60,
  },
  categoryItem: {
    backgroundColor: Color.colorPlum,
  },
  categoryInner: {
    backgroundColor: Color.colorLightsteelblue,
  },
  categoryChild1: {
    backgroundColor: Color.colorMediumaquamarine,
  },
  categoryParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameView: {
    width: 368,
  },
  collaborativeWardrobesParent: {
    width: 369,
  },
  tripName: {
    textTransform: "capitalize",
    lineHeight: 8,
    color: Color.colorGray_100,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    flex: 1,
  },
  tripNameWrapper: {
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
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
  },
  trips1: {
    marginLeft: 8,
  },
  tripsParent: {
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 8,
  },
  frameParent2: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  instanceParent: {
    height: 400,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    alignSelf: "stretch",
  },
  groupParent: {
    top: 184,
    left: 0,
    width: 390,
    alignItems: "flex-end",
    position: "absolute",
  },
  image123Icon: {
    width: 25,
    height: 21,
  },
  xplore: {
    color: Color.lightForegroundsFgOnInverted,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.small,
    fontWeight: "500",
    marginLeft: 10,
  },
  image123Parent: {
    top: 740,
    left: 269,
    backgroundColor: Color.colorDarkslategray_100,
    borderWidth: 1.5,
    height: 38,
    padding: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  home: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightForegroundsFgOnInverted,
    flex: 1,
  },
});

export default Home1;
