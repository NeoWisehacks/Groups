import * as React from "react";
import { Text, StyleSheet, View, Pressable, SafeAreaView, ScrollView } from "react-native";
import { Image } from "expo-image";
import SearchAndButtons from "../components/SearchAndButtons";
import ToggleHome from "../components/ToggleHome";
import Advertisnment from "../components/Advertisnment";
import { useNavigation } from "@react-navigation/native";
import CommunityPreview from "../components/CommunityPreview";
import Navbar from "../components/Navbar";
import ModeLightTypeDefault from "../components/ModeLightTypeDefault";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import Category from "../components/category";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <SearchAndButtons />
      <ToggleHome
        property1Variant2Position="absolute"
        property1Variant2Top={150}
        property1Variant2Left={0}
      />
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/rectangle-532910.png")}
      />
      <View style={styles.groupParent}>
        <Advertisnment showIconLeft={false} showIconRight={false} />
        <View style={styles.frameParent}>
          <View>
            <View style={styles.categoriesWrapper}>
              <Text style={styles.categories}>Categories</Text>
            </View>
            <View style={styles.categoryParent}>
            <Category
                camping="camping"
                categoryMarginLeft="unset"
              />
              <Category
                camping="camping"
                categoryMarginLeft={16}
              />
              <Category
                camping="Business"
                categoryMarginLeft={16}
              />
              
            </View>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.parentFlexBox}>
              <Text style={styles.categories}>Communities</Text>
              <Pressable onPress={() => navigation.navigate("CommunitiesList")}>
                <Text style={[styles.seeMore1, styles.campingTypo]}>
                  See More
                </Text>
              </Pressable>
            </View>
            <View style={styles.categoryParent}>
              <CommunityPreview />
              <CommunityPreview propMarginLeft={16} />
              <CommunityPreview propMarginLeft={16} />
              <CommunityPreview propMarginLeft={16} />
              <CommunityPreview propMarginLeft={16} />
              <CommunityPreview propMarginLeft={16} />
              <CommunityPreview propMarginLeft={16} />
            </View>
          </View>
          <View style={[styles.wardrobesParent, styles.parentFlexBox]}>
            <Text style={styles.categories}>Wardrobes</Text>
            <Pressable onPress={() => navigation.navigate("Home1")}>
              <Text style={[styles.seeMore1, styles.campingTypo]}>
                See More
              </Text>
            </Pressable>
          </View>
          <ScrollView style={styles.tripsParent}>
            <View style={styles.tripsSpaceBlock}>
              <View style={[styles.tripNameWrapper, styles.forParentFlexBox]}>
                <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
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
                <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
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
                <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
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
                <Text style={[styles.tripName, styles.forClr]}>Trip Name</Text>
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
          </ScrollView>
        </View>
      </View>
      <Navbar
        vuesaxlinearvideoCircle={require("../assets/vuesaxlinearvideocircle1.png")}
        vuesaxlinearbag2={require("../assets/vuesaxlinearbag23.png")}
      />
      <View style={styles.image123Parent}>
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
  campingPosition: {
    left: "12.5%",
    position: "absolute",
  },
  categoryLayout: {
    height: 60,
    width: 80,
  },
  campingTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 369,
  },
  forParentFlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
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
    textAlign: "left",
    alignSelf: "stretch",
  },
  tripsSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    width: 100,
    paddingHorizontal: 0,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
  homePosition: {
    height: 5,
    width: 134,
    bottom: 0,
    left: "50%",
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
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 20,
  },
  categoriesWrapper: {
    width: 369,
  },
  categoryChild: {
    backgroundColor: Color.colorLightpink,
  },
  camping: {
    top: "60%",
    fontSize: FontSize.xSMALL_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "12.5%",
    position: "absolute",
  },
  mayaIcontraveloutlinetentChild: {
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    display: "none",
    borderColor: Color.lightForegroundsFgOnInverted,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  categoryItem: {
    backgroundColor: Color.colorPlum,
  },
  category1: {
    marginLeft: 16,
  },
  categoryShadowBox: {
    backgroundColor: Color.colorLightsteelblue,
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
  categoryChild2: {
    backgroundColor: Color.colorMediumaquamarine,
  },
  categoryParent: {
    width: 379,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  seeMore1: {
    color: Color.colorIndianred,
    textAlign: "right",
    fontSize: FontSize.body_size,
    lineHeight: 20,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  frameContainer: {
    marginTop: 8,
  },
  wardrobesParent: {
    marginTop: 8,
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
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    height: 563,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    marginTop: 5,
    alignSelf: "stretch",
  },
  groupParent: {
    top: 184,
    left: 0,
    width: 390,
    height: 600,
    alignItems: "flex-end",
    position: "absolute",
  },
  image123Icon: {
    width: 25,
    height: 21,
  },
  xplore: {
    fontFamily: FontFamily.small,
    marginLeft: 10,
    fontSize: FontSize.body_size,
    fontWeight: "500",
    color: Color.lightForegroundsFgOnInverted,
  },
  image123Parent: {
    top: 740,
    left: 269,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkslategray_100,
    borderWidth: 1.5,
    height: 38,
    padding: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.lightForegroundsFgOnInverted,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
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
  home: {
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.lightForegroundsFgOnInverted,
  },
});

export default Home;
